import React from "react";
import { ArticleHeading } from "../ArticleHeading";
import H3 from "../../atoms/H3/H3";
import { ArticleDescription } from "../../atoms/ArticleDescription";
import { ArticleImage } from "../../atoms/ArticleImage";

interface Props {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export default function ArticleCard({
  title,
  description,
  image,
  imageAlt,
}: Props) {
  return (
    <article className="flex flex-row gap-7">
      <div className="shrink">
        <H3 text={title} className="font-serif" />
        <ArticleDescription
          text={description}
          className="font-sans mt-1 truncate text-clip line-clamp-3 overflow-hidden"
        />
      </div>
      <div className="w-32 h-32 grow shrink-0">
        <ArticleImage src={image} alt={imageAlt} className="object-cover" />
      </div>
    </article>
  );
}
