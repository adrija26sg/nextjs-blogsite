import { useRouter } from "next/router";
import fsPromises from "fs/promises";
import path from "path";
import Image from "next/image";

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), "data/posts.json");
  const jsonData = await fsPromises.readFile(filePath);
  const posts = JSON.parse(jsonData);

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), "data/posts.json");
  const jsonData = await fsPromises.readFile(filePath);
  const posts = JSON.parse(jsonData);
  const post = posts.find((post) => post.id === params.id);

  return { props: { post } };
}

export default function Post({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Image src={post.image} alt={post.title} width={600} height={400} />
    </div>
  );
}
