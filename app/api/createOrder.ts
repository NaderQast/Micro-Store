import { client } from "@/sanity/lib/client";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const orderData = req.body;

    try {
      await client.create(orderData);
      res.status(201).json({ message: "Order created successfully" });
    } catch (error) {
      console.error("Sanity order creation error:", error);
      res.status(500).json({ message: "Failed to create order" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}