"use client";

import { useState } from "react";
import Image from "next/image";
import ExpandButton from "./ExpandButton";

export default function ProjectAccordionClient({
  projects,
}: {
  projects: any[];
}) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="flex flex-col gap-4 border-[#878787] border-t-2">
      {projects.map((project: any) => (
        <div key={project._id} className="border-b-2 border-[#878787]">
          <div className="flex justify-between items-center px-4 py-4 ">
            <h1 className="text-[20px] font-semibold">{project.title}</h1>
            <ExpandButton
              isExpanded={expandedId === project._id}
              onToggle={() => toggle(project._id)}
            />
          </div>

          {expandedId === project._id && (
            <div className="flex flex-col px-4 pb-4 gap-4 md:flex-row">
              <div className="flex flex-col gap-4 justify-center">
                <p>{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags?.map((tag: string) => (
                    <span
                      key={tag}
                      className="bg-[#6C3483] p-2 rounded-lg shadow-[2px_2px_0_0_rgba(43,43,43,1)] text-white "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={300}
                height={300}
                className="rounded-lg object-cover mx-auto xl:w-1/2 xl:h-auto"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
