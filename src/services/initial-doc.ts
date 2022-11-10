import { Request, Response } from "express";
import {initialData} from '../static'

export function getInitialDoc(req: Request, res: Response) {

	res.send({
		initialDoc: initialData
	})


}
