import fsPromises from "fs/promises";
import path from "path";

export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), "data/posts.json");
  const jsonData = await fsPromises.readFile(filePath);
  const posts = JSON.parse(jsonData);
  res.status(200).json(posts);
}
