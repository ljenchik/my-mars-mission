import express, { Request, Response } from "express";
import {
  changePassword,
  createAccount,
  foundUser,
  getAccountById,
  getTicketsByOwnerId,
  updateAccount,
} from "../repos/accountRepo";
import bcrypt from "bcrypt";
import { requestAccountValidation } from "../validation/accountFormValidation";
import {
  generateAccessToken,
  generateRefreshToken,
  validateToken,
} from "../tokens/tokens";

const router = express.Router();

router.post("/account/create", async (req: Request, res: Response) => {
  let requestBody = req.body;
  if (requestAccountValidation(requestBody).success) {
    let salt = await bcrypt.genSalt(10);
    await new Promise((resolve, reject) => {
      bcrypt.hash(requestBody.password, salt, function (err, hash) {
        if (err) reject(err);
        resolve(hash);
        requestBody.salted_password = salt;
        requestBody.hashed_password = hash;
      });
    });
    try {
      const accountId = await createAccount(requestBody);
      return res.json({ success: true, id: accountId, error: "" });
    } catch (error) {
      res.status(500);
      return res.send(error);
    }
  } else {
    return res.json({
      success: false,
      id: "",
      error: requestAccountValidation(requestBody).error,
    });
  }
});

router.post(
  "/account/:id/update",
  validateToken,
  async (req: any, res: any) => {
    var id = parseInt(req.params.id);
    if (id != req.account.id) {
      res.status(403);
      return res.send("Forbidden!");
    }
    let requestBody = req.body;
    try {
      await updateAccount(
        id,
        requestBody.name,
        requestBody.email,
        requestBody.photo,
        requestBody.updated_at
      );
      return res.json({ success: true, error: "" });
    } catch (error) {
      res.status(500);
      return res.send(error);
    }
  }
);

router.post("/account/login", async (req, res) => {
  const foundAccounts = await foundUser(req.body.email);
  if (foundAccounts.length === 0) {
    res.status(404);
    return res.json({
      success: false,
      message: "Invalid username or password",
      id: "",
    });
  }

  const foundAccount = foundAccounts[0];
  const hashedPassword = await bcrypt.compare(
    req.body.password,
    foundAccount.hashed_password
  );
  if (hashedPassword) {
    const accessToken = generateAccessToken({
      email: foundAccount.email,
      id: foundAccount.id,
    });
    const refreshToken = generateRefreshToken({
      email: foundAccount.email,
      id: foundAccount.id,
    });
    return res.json({
      success: true,
      message: "Logged In!",
      id: foundAccount.id,
      accessToken: accessToken,
      refreshToken: refreshToken,
    });
  } else {
    //res.status(401).send("Password Incorrect!");
    return res.json({
      success: false,
      message: "Invalid username or password",
      id: "",
    });
  }
});

router.get("/account/:id", validateToken, async (req: any, res: any) => {
  const id = parseInt(req.params.id);
  if (id != req.account.id) {
    res.status(403);
    return res.send("Forbidden!");
  }
  try {
    const data = await getAccountById(id);
    return res.json({ success: true, account: data, error: "" });
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
});

router.get(
  "/account/:id/tickets",
  validateToken,
  async (req: any, res: any) => {
    const id = parseInt(req.params.id);
    if (id != req.account.id) {
      res.status(403);
      return res.send("Forbidden!");
    }
    try {
      const data = await getTicketsByOwnerId(id);
      console.log(data);
      return res.json({ success: true, tickets: data, error: "" });
    } catch (error) {
      res.status(500);
      return res.send(error);
    }
  }
);

router.post(
  "/account/:id/change-password",
  validateToken,
  async (req: any, res: any) => {
    var id = parseInt(req.params.id);
    const requestBody = req.body;
    const foundAccounts = await foundUser(req.body.email);
    if (foundAccounts.length === 0) {
      res.status(404);
      return res.json({
        success: false,
        message: "Invalid username or password",
        id: "",
      });
    }
    const foundAccount = foundAccounts[0];
    const hashedPassword = await bcrypt.compare(
      req.body.currentPassword,
      foundAccount.hashed_password
    );
    let salt = await bcrypt.genSalt(10);
    if (hashedPassword) {
      await new Promise((resolve, reject) => {
        bcrypt.hash(requestBody.newPassword, salt, function (err, hash) {
          if (err) reject(err);
          resolve(hash);
          requestBody.salted_password = salt;
          requestBody.hashed_password = hash;
        })});
        try {
          await changePassword(
            id,
            requestBody.salted_password,
            requestBody.hashed_password
          );
          return res.json({ success: true, error: "" });
        } catch (error) {
          res.status(500);
          return res.send(error);
        }
      }
      else {
        return res.json({
          success: false,
          error: "Current password is invalid",
        });
      }
       
    });

export default router;
