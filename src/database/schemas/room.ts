import mongoose, {Schema, model} from "mongoose"


const collection = 'rooms'

export interface Room {
	_id: string,
	code: string,
	doc: string,
	timestamp: Date
	
}

export const RoomSchema: Schema<Room> = new Schema<Room>({
	_id: {type: String, required: true},
	code: {type: String, required: true},
	doc: {type: String, required: true},
	timestamp: {type: Date, required: true}
})

export const RoomModel = model<Room>(
	'Room',
	RoomSchema,
	collection
)
