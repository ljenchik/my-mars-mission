import express, { Request, Response } from "express";
import { createTicket } from "../repos/ticketRepo";

const router = express.Router();
router.post("/account/:id/ticket", async (req: Request, res: Response) => {
    let requestBody = req.body;
    try {
      const ticket_id = await createTicket(requestBody);
      return res.json({ success: true, ticket_id: ticket_id, error: "" });
    } catch (error) {
      res.status(500);
      return res.send(error);
    }
});

export default router;
