import fs from 'fs'
import path from 'path'

export default function handler(req, res) {

  const filePath = path.join(process.cwd(), 'data', 'blog.json')
  const fileData = fs.readFileSync(filePath)
  const data = JSON.parse(fileData)

  if (req.method === "GET") {
    res.status(200).json(data)
  }
}