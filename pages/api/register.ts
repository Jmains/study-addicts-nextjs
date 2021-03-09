import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@lib/prisma";

export default async function register(req: NextApiRequest, res: NextApiResponse) {
  console.log("register api: ", req.body);
  const { email, firstName, lastName, uid } = req.body;
  try {
    const dbRes = await prisma.user.create({
      data: {
        id: uid,
        email: email,
        firstName: firstName,
        lastName: lastName,
      },
    });
    console.log("dbres: ", dbRes);
    return res.status(200).json(dbRes);
  } catch (err) {
    console.error(err);
    return res.status(err.requestResult.statusCode).send(err.message);
  }
}
