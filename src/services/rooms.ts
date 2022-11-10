
import { Request, Response } from "express";
import mongoose from "mongoose";
import {RoomModel, RoomSchema} from "../database/schemas/room";
import { generateRandomString } from "../util/generate-ids";


export function createRoom(req: Request, res: Response) {

    const roomID = generateRandomString(12, 'alphanumeric');
    const passcode = generateRandomString(6, 'numeric')


		const model = new RoomModel({
			_id: roomID,
			doc: '# Welcome',
			code: passcode,
			timestamp: Date.now()
		})

		model.save().then((response) => {
			console.log(response)
		})

    res.send({
        roomID: roomID,
				code: passcode,
    })
}


export async function authenticateRoom(req: Request, res: Response) {

	const roomID = req.body.room as string
	const code = req.body.code as string

	const Room = mongoose.model('Room', RoomSchema)

	const room = await Room.findOne({
		_id: roomID
	}).select('code').exec()


	if (!room) {
		res.sendStatus(404)
		return;
	}

	res.send({
		validated: room.code === code
	})	

}
