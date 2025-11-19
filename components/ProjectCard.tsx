import { client } from "@/sanity/lib/client";
import urlBuilder from "@sanity/image-url";
import Image from "next/image";
const builder = urlBuilder(client);

interface ProjectCard {
  _id: string;
  name: string;
  description: string;
  photo?: {
    _type: "image";
    asset: { _ref: string; _type: "reference" };
  };
  tags: Array<string>;
}

async function getProjectCard(): Promise<ProjectCard[]> {
  const query = `*[_type == "project"] {
    _id, name, description, photo, tags}`;

  return await client.fetch(query);
}

export default async function ProjectCard() {
  const projects = await getProjectCard();
  return;
}
