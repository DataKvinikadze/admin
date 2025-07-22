import React from "react";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { structuredData } from "@/data/structuredData";
import { Pen, Trash2 } from "lucide-react";
import { StructuredRating } from "@/types/structuredType";

export type RatingsProps = {
  searchTerm: string;
  limit?: number;
  title?: string;
  structuredData: StructuredRating[];
};

const StructuredTable = ({ structuredData, searchTerm }: RatingsProps) => {
  if (searchTerm) {
    structuredData = structuredData.filter((item) =>
      item.institution.en.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  return (
    <div className="space-y-4">
      <div className="rounded-xl border shadow-sm overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="h-12">
              <TableHead>Institution</TableHead>
              <TableHead>Rating Term</TableHead>
              <TableHead>Published Date</TableHead>
              <TableHead>Local Currency</TableHead>
              <TableHead>Local Rating</TableHead>
              <TableHead>Document</TableHead>
              <TableHead className="text-right">actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {structuredData.map((rating) => (
              <TableRow className="h-12" key={rating._id}>
                <TableCell>{rating.institution.en}</TableCell>
                <TableCell>{rating.ratingTerm}</TableCell>
                <TableCell>
                  {new Date(rating.publishedDate).toLocaleDateString()}
                </TableCell>
                <TableCell>{rating.ratingDetails.localCurrency}</TableCell>
                <TableCell>{rating.ratingDetails.localRating}</TableCell>
                <TableCell>
                  <a
                    href={`https://d3u72n1gdjvw0x.cloudfront.net/research/7561928911386233.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View PDF
                  </a>
                </TableCell>
                <TableCell className="flex gap-2 text-right">
                  <div className="flex justify-end  gap-3">
                    <Link href={`/ratings/structured/edit/${rating._id}`}>
                      <Pen className="w-4 h-4 text-primary" />
                    </Link>
                    <Trash2 className="w-4 h-4 text-destructive" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {structuredData.length === 0 && (
              <TableRow className="text-center">
                <TableCell
                  colSpan={7}
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

export default StructuredTable;
