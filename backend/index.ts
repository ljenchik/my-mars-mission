import express from "express";
import cors from "cors";
import accountRoutes from './routes/accountRoutes';
import ticketRoutes from './routes/ticketRoutes';

require("dotenv").config();

 const app = express();

 const port = process.env.PORT || 3001


 app.use(express.json());
 app.use(cors());
 app.use(express.urlencoded({extended: true}));

 app.use('/', accountRoutes)
 app.use('/', ticketRoutes)

 app.listen(port, () => console.log(`Listening on port ${port}.`))