// this should deal with reading the local markdown file into memory to serve it as the initial  document

import path from "path";
import fs from 'fs'


const filePath = path.join(__dirname, 'initial.md')


export const initialData = fs.readFileSync(filePath, {
	encoding: 'utf8',
	flag: 'r'
})


