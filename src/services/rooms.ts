
import { Request, Response } from "express";
import { generateRandomString } from "../util/generate-ids";


export function createRoom(req: Request, res: Response) {

    const roomID = generateRandomString(12, 'alphanumeric');
    const passcode = generateRandomString(6, 'numeric')


    res.send({
        roomID: roomID,
    })

}

