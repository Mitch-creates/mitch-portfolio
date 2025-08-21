import React from "react";

type Link = { label: string; href: string };

export type Project = {
  title: string;
  description: string;
  period?: string;
  tags: string[];
  links?: Link[];
  featured?: boolean;
};

export type Social = { label: string; href: string; icon: React.ReactNode };
