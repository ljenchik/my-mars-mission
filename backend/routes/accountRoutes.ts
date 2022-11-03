import express, { Request, Response } from "express";
import { createAccount, foundUser, getAccountById } from "../repos/accountRepo";
import bcrypt from "bcrypt";
import { requestValidation } from "../accountFormValidation";

var jwt = require("jsonwebtoken");
const router = express.Router();

// accessTokens
function generateAccessToken(account: any) {
  return jwt.sign(account, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });
}

// refreshTokens
let refreshTokens: any = [];
function generateRefreshToken(account: any) {
  const refreshToken = jwt.sign(account, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "20m",
  });
  refreshTokens.push(refreshToken);
  return refreshToken;
}

function validateToken(
  req: { headers: { [x: string]: any }; account: any },
  res: any,
  next: any
) {
  //get token from request header
  const authHeader = req.headers["authorization"];
  const token = authHeader.split(" ")[1];
  //the request header contains the token "Bearer <token>", split the string and use the second value in the split array.
  if (token == null) res.sendStatus(400).send("Token not present");
  jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET,
    (err: any, account: any) => {
      if (err) {
        res.status(403).send("Token invalid");
      } else {
        req.account = account;
        next(); //proceed to the next action in the calling function
      }
    }
  ); //end of jwt.verify()
} //end of function

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
    res.status(404);
    return res.json({
      success: false,
      message: "Invalid username or password",
      id: "",
    });
  }
  const hashedPassword = await bcrypt.compare(
    req.body.password,
    foundAccount[0].hashed_password
  );
  if (hashedPassword) {
    const accessToken = generateAccessToken({ foundAccount: req.body.email });
    const refreshToken = generateRefreshToken({ foundAccount: req.body.email });
    return res.json({
      success: true,
      message: "Logged In!",
      id: foundAccount[0].id,
      accessToken: accessToken,
      refreshToken: refreshToken
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
  const email = req.account.foundAccount;
  const id = parseInt(req.params.id);
  try {
    const data = await getAccountById(id);
    if (data.length !== 1 || data[0].email != email) {
      res.status(403);
      return res.send("Forbidden!");
    }

    return res.json({ success: true, account: data, error: "" });
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
});

export default router;
