import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Eye, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";

const MethodologyCard = ({
  title,
  description,
  slug,
  publishedDate,
  blockCount,
  id,
}: {
  title: { en: string; ka: string };
  description: {en: string, ka: string}
  slug: {en: string, ka: string}
  publishedDate: Date;
  blockCount: number;
  id: string;
}) => {
  return (
    <Card className="p-6">
      <div className="flex justify-between">
        <div className="grid gap-2">
          <CardHeader>
            <CardTitle className="font-bold text-[18px]">{title.en}</CardTitle>
          </CardHeader>
          <CardDescription className="text-[16px]">
            {description.en}
          </CardDescription>
          <CardFooter className="text-[14px] text-gray-500">
            <div className="flex items-center gap-4">
              <span>Slug: /{slug.en}</span>
              <span>•</span>
              <span>{blockCount}</span>
              <span>•</span>
              <span>Updated: {publishedDate.toDateString()}</span>
            </div>
          </CardFooter>
        </div>
        <CardAction className="flex gap-2">
          <Link
            href={`methodology/view/${id}`}
            className="ring-offset-background focus-visible:outline-hidden focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-input bg-background hover:bg-accent hover:text-accent-foreground border h-9 rounded-md px-3"
          >
            <Eye className="" />
          </Link>
          <Link
            href={`methodology/edit/${id}`}
            className="ring-offset-background focus-visible:outline-hidden focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-input bg-background hover:bg-accent hover:text-accent-foreground border h-9 rounded-md px-3"
          >
            <Pencil />
          </Link>
          <Link
            href={"delete"}
            className="ring-offset-background focus-visible:outline-hidden focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-input bg-background hover:bg-accent hover:text-accent-foreground border h-9 rounded-md px-3"
          >
            <Trash2 className="text-red-500" />
          </Link>
        </CardAction>
      </div>
    </Card>
  );
};

export default MethodologyCard;
