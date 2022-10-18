import express, { Request, Response } from "express";
import { createAccount, foundUser, getAccountById } from "./repos/accountRepo";
import bcrypt from "bcrypt";
import { requestValidation } from "./accountFormValidation";

const router = express.Router();

router.post("/account/create", async (req: Request, res: Response) => {
  let requestBody = req.body;
  if (requestValidation(requestBody).success) {
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
      error: requestValidation(requestBody).error,
    });
  }
});

router.post("/account/login", async (req, res) => {
  const foundAccount = await foundUser(req.body.email);
  if (foundAccount.length === 0) {
    return res.json({ success: false, message: "Invalid username or password", id: "" });
  }
  const hashedPassword = await bcrypt.compare(
    req.body.password,
    foundAccount[0].hashed_password
  );
  if (hashedPassword === false) {
    return res.json({ success: false, message: "Invalid username or password", id: "" });
  }
  return res.json({ success: true, message: "Logged In!", id: foundAccount[0].id });
});

router.get("/account/:id(\\d+)", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const account = await getAccountById(id);
    return res.json({ success: true, account: account, error: "" });
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
});

export default router;
