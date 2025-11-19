"use client";

import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ExpandButton({
  isExpanded,
  onToggle,
}: {
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <ExpandMoreIcon
      onClick={onToggle}
      className={`transition-transform duration-300 ${
        isExpanded ? "rotate-180" : ""
      }`}
    />
  );
}
