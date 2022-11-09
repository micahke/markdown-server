import mongoose, {Connection} from "mongoose";
import {MONGO_ID, MONGO_PASS} from "../util/secrets";


const clusterURL: string = `mongodb+srv://${MONGO_ID}:${MONGO_PASS}@live-markdown.nemylu3.mongodb.net/?retryWrites=true&w=majority`


const config = {
	dbName: "development",
	useNewUrlParser: true,
	useUnifiedTopology: true
}

mongoose.connect(clusterURL, config, () => {
	console.log("Connected to database")
})

export const db: Connection = mongoose.connection;
db.on('error', () => {
	console.error('A database error occurred');
})
