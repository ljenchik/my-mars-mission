import express, { Request, Response } from "express";
import { createAccount, foundUser, getAccountById } from "../repos/accountRepo";
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
  console.log(req.account);
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

export default router;
