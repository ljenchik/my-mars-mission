import express, { Request, Response } from "express";
import { createAccount } from "./repos/accountRepo";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/account/create", async (req: Request, res: Response) => {
  let requestBody = req.body;
  let salt = await bcrypt.genSalt(10);

  await new Promise((resolve, reject) => {
    bcrypt.hash(requestBody.password, salt, function (err, hash) {
      if (err) reject(err);
      resolve(hash);
      requestBody.salted_password = salt;
      requestBody.hashed_password = hash;
    });
  });

  delete requestBody.password;

  try {
    const accountId = await createAccount(requestBody);
    return res.json({ success: true, id: accountId, error: "" });
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
});

export default router;
