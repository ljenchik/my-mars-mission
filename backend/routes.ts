import express, { Request, Response } from "express";
import { createAccount, getAccountById } from "./repos/accountRepo";
import bcrypt from "bcrypt";
import { requestValidation } from "./accountFormValidation";

const router = express.Router();

router.post("/account/create", async (req: Request, res: Response) => {
  let requestBody = req.body;
  let salt = await bcrypt.genSalt(10);
  if (requestBody.password) {
    await new Promise((resolve, reject) => {
      bcrypt.hash(requestBody.password, salt, function (err, hash) {
        if (err) reject(err);
        resolve(hash);
        requestBody.salted_password = salt;
        requestBody.hashed_password = hash;
      });
    });
  }
  else {
    return res.json({ success: false, id: "", error: "Enter password"});
  }
  if (requestValidation(requestBody).success) {
    try {
      const accountId = await createAccount(requestBody);
      return res.json({ success: true, id: accountId, error: "" });
    } catch (error) {
      res.status(500);
      return res.send(error);
    }
  }
  else {
    return res.json({ success: false, id: "", error: requestValidation(requestBody).error});
  }
});

router.get("/account/:id(\\d+)", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const account = await getAccountById(id);
    return res.json({success: true, account: account, error: ""});
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
});



export default router;