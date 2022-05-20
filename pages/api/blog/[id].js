import fs from 'fs'
import path from 'path'


export default function acticleHandler({ query: { id } }, res) {
  const filePath = path.join(process.cwd(), 'data', 'blog.json')
  const fileData = fs.readFileSync(filePath)
  const data = JSON.parse(fileData)
  const filterData = data.blogListe.find(item => item.id === id)

  res.status(200).json(filterData)
}