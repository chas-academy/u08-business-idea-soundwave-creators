import { Request, Response} from "express";

export const addLikedSong = (req:Request, res:Response) => {
  console.log(req.body)
  res.send("request came into the backend")
}