import { Account } from "../models";

var jwt = require("jsonwebtoken");

// accessTokens
export function generateAccessToken(account: {email:string, id:number}) {
  return jwt.sign(account, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "60m",
  });
}

// refreshTokens
let refreshTokens: any = [];
export function generateRefreshToken(account: any) {
  const refreshToken = jwt.sign(account, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "20m",
  });
  refreshTokens.push(refreshToken);
  return refreshToken;
}

export function validateToken(
  req: { headers: { [x: string]: any }; account: Account },
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
    (err: any, account: Account) => {
      if (err) {
        res.status(403).send("Token invalid");
      } else {
        req.account = account;
        next(); //proceed to the next action in the calling function
      }
    }
  ); //end of jwt.verify()
} //end of function
