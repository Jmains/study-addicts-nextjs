import prisma from "@lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const studySessionApi = async (req: NextApiRequest, res: NextApiResponse) => {
  // TODO: Authenticate user on the server
  // const {cookies } = req;
  // const token = cookies[token];

  try {
    if (req.method === "GET") {
      const body = { ...req.body };
      return await getStudySession(req, res, body);
    }

    // Add an item to the wishlist
    if (req.method === "POST") {
      const body = { ...req.body };
      return await addStudySession(req, res, body);
    }

    // Add an item to the wishlist
    if (req.method === "PUT") {
      const body = { ...req.body };
      return await updateStudySession(req, res, body);
    }

    // Remove an item from the wishlist
    if (req.method === "DELETE") {
      const body = { ...req.body };
      return await removeStudySession(req, res, body);
    }
  } catch (error) {
    console.error(error);
    const message = "An unexpected error occured";
    res.status(500).json({ ok: false, data: null, errors: message });
  }
};

const getStudySession = async (req: NextApiRequest, res: NextApiResponse, body: {}) => {
  try {
    const ss = await prisma.studySession.findMany();
    console.log("STUDY SESSION: ", ss);
    return res.status(200).json(ss);
  } catch (err) {
    return res.status(500).json({
      ok: false,
      message: "Failed to retrieve study sessions",
      details: err,
    });
  }
};

const addStudySession = async (req: NextApiRequest, res: NextApiResponse, body: {}) => {
  try {
  } catch (err) {}
};

const updateStudySession = async (req: NextApiRequest, res: NextApiResponse, body: {}) => {
  try {
  } catch (err) {}
};

const removeStudySession = async (req: NextApiRequest, res: NextApiResponse, body: {}) => {
  try {
  } catch (err) {}
};

export default studySessionApi;
