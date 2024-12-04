import { getToken } from "next-auth/jwt";

export default async function handler(req, res) {
  const token = await getToken({ req, secret: process.env.JWT_SECRET });
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  res.status(200).json({ message: "Authenticated", user: token });
}
