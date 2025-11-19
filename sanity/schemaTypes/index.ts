import { projectType } from "@/app/studio/[[...tool]]/schemaTypes/projectType";
import { type SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType],
};
