import React from "react";
import Link from "next/link";
import { RatingsProps } from "./RatingsTable";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TableCaption } from "../ui/table";
import { structuredData } from "@/data/ratings/structured";
import { Button } from "../ui/button";

const StructuredTable = ({ title, limit }: RatingsProps) => {
  return (
    <div>
      <h3 className="text-lg font-semibold overflow-hidden text-ellipsis whitespace-nowrap py-3">
        {title ? title : "Ratings"}
      </h3>
      <Table>
        <TableCaption>{title ? title : "Structured Ratings"}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Institution</TableHead>
            <TableHead>Rating Term</TableHead>
            <TableHead>Published Date</TableHead>
            <TableHead>Local Currency</TableHead>
            <TableHead>Local Rating</TableHead>
            <TableHead>View</TableHead>
            <TableHead>Edit</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {structuredData.map((rating) => (
            <TableRow key={rating._id}>
              <TableCell>{rating.institution.en}</TableCell>
              <TableCell>{rating.ratingTerm}</TableCell>
              <TableCell>
                {new Date(rating.publishedDate).toLocaleDateString()}
              </TableCell>
              <TableCell>{rating.ratingDetails.localCurrency}</TableCell>
              <TableCell>{rating.ratingDetails.localRating}</TableCell>
              <TableCell>
                <a href={rating.key} target="_blank" rel="noopener noreferrer">
                  View Document
                </a>
              </TableCell>
              <TableCell>
                <Link href={`/ratings/${rating.type}/edit/${rating._id}`}>
                  <Button className="bg-blue-500 text-white">Edit</Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default StructuredTable;
