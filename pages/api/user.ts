import prisma from "@lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function user(req: NextApiRequest, res: NextApiResponse) {
  const { uid } = req.body;
  // console.log("uid: ", uid);
  if (!uid) {
    return res.status(401).send("uid not found");
  }

  try {
    const user = await prisma.user.findUnique({ where: { id: uid } });
    console.log("api user: ", user);
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(error.requestResult.statusCode).send(error.message);
  }
}
