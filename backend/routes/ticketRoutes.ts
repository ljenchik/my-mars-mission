import express, { Request, Response } from "express";
import { createTicket, getTicketById } from "../repos/ticketRepo";
import { validateToken } from "../tokens/tokens";
import { requestTicketValidation } from "../validation/ticketFormValidation";

const router = express.Router();

router.post(
  "/account/:id/ticket",
  validateToken,
  async (req: Request, res: Response) => {
    let requestBody = req.body;
    if (requestTicketValidation(requestBody).success) {
      try {
        const ticket_id = await createTicket(requestBody);
        return res.json({ success: true, ticket_id: ticket_id, error: "" });
      } catch (error) {
        res.status(500);
        return res.send(error);
      }
    } else {
      return res.json({
        success: false,
        id: "",
        error: requestTicketValidation(requestBody).error,
      })
    }
  }
);

router.get("/ticket/:id", validateToken, async (req: any, res: any) => {
  const id = parseInt(req.params.id);
  try {
    const data = await getTicketById(id);
    if (data.length !== 1) {
      res.status(404);
      return res.send("No ticket with this id");
    } else {
      console.log(data[0].owner_id);
      if (data[0].owner_id !== req.account.id) {
        res.status(403);
        return res.send("Forbidden!");
      } else {
        return res.json({ success: true, ticket: data, error: "" });
      }
    }
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
});

export default router;
