import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "../ui/table";
import Link from "next/link";
import {
  creditResearch,
  governanceResearch,
  marketResearch,
  otherResearch,
  policyResearch,
} from "@/data/research/research";
import { Pen, Trash2 } from "lucide-react";

const ResearchTable = ({
  researchData = [],
  title,
  limit,
  type,
  searchTerm,
}: {
  researchData?: {
    _id: string;
    title: { en: string };
    summary: { en: string };
    author: string;
    publishedDate: string;
  }[];
  title?: string;
  limit?: number;
  type?: string;
  searchTerm?: string;
}) => {


  if (searchTerm) {
    researchData = researchData.filter((item) =>
      item.title.en.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return (
    <div>
      <div className="rounded-md border shadow-sm overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="min-w-[200px]">Title</TableHead>
              <TableHead className="hidden md:table-cell min-w-[250px]">
                Summary
              </TableHead>
              <TableHead className="min-w-[150px]">Author</TableHead>
              <TableHead className="min-w-[130px]">Published</TableHead>
              <TableHead className="text-right min-w-[80px]">View</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {researchData.map((item) => (
              <TableRow
                key={item._id}
                className="hover:bg-muted/50 transition-colors h-15"
              >
                <TableCell
                  className="font-medium max-w-[250px] truncate"
                  title={item.title.en}
                >
                  {item.title.en}
                </TableCell>
                <TableCell
                  className="hidden md:table-cell text-muted-foreground max-w-[300px] truncate"
                  title={item.summary.en}
                >
                  {item.summary.en}
                </TableCell>
                <TableCell className="text-sm">{item.author || "—"}</TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  {new Date(item.publishedDate).toLocaleDateString()}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end items-center space-x-4">
                    <Link href={`/research/edit/${item._id}`}>
                      <Pen className="w-4 h-4 text-black" />
                    </Link>
                    <Link
                      href={`/research/delete/${item._id}`}
                      className="text-blue-600 hover:underline"
                    >
                      <Trash2 className="w-4 h-4 text-black" />
                    </Link>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {researchData.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="text-center py-6 text-muted-foreground"
                >
                  No research articles found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ResearchTable;
