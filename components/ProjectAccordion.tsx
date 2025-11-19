import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import ProjectAccordionClient from "./ProjectAccordionClient";

const query = groq`*[_type == "project"]{
  _id,
  title,
  description,
  "imageUrl": photo.asset->url,
  tags
}`;

export default async function ProjectAccordion() {
  const projects = await client.fetch(query);

  return <ProjectAccordionClient projects={projects} />;
}
