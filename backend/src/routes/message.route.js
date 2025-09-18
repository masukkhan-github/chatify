import express from "express";

const router = express.Router();

router.post("/send");
router.get("/receive");

export default router;
