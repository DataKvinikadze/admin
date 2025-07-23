import { Pen, Trash2 } from "lucide-react";
import Link from "next/link";

import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "../ui/table";
import { LegislationType } from "@/types/legislationType";

interface Props {
  legislationData: LegislationType[];
  title: string;
  limit: number;
  type: string;
  searchTerm?: string;
}

const LegislationTable = ({ legislationData, searchTerm }: Props) => {
  if (searchTerm) {
    legislationData = legislationData.filter((item) =>
      item.title.en.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  return (
    <div className="space-y-4">
      <div className="rounded-xl border shadow-sm overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="min-w-[200px]">Title</TableHead>
              <TableHead className="min-w-[250px]">Summary</TableHead>
              <TableHead className="min-w-[150px]">Authority</TableHead>
              <TableHead className="min-w-[150px]">Document Type</TableHead>
              <TableHead className="min-w-[130px]">Published</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {legislationData.map((item) => (
              <TableRow
                key={item.id}
                className="hover:bg-muted/60 transition-colors h-15"
              >
                <TableCell title={item.title.en} className="truncate">
                  {item.title.en}
                </TableCell>
                <TableCell
                  title={item.summary.en}
                  className="truncate text-muted-foreground"
                >
                  {item.summary.en}
                </TableCell>
                <TableCell className="text-sm">{item.authority.en}</TableCell>
                <TableCell className="text-sm capitalize">
                  {item.documentType.replace(/_/g, " ")}
                </TableCell>
                <TableCell className="text-sm">
                  {new Date(item.publishedDate).toLocaleDateString()}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end items-center gap-3">
                    <Link href={`/legislation/edit/${item.id}`}>
                      <Pen className="w-4 h-4 text-primary" />
                    </Link>
                    <Link href={`/legislation/delete/${item.id}`}>
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </Link>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {legislationData.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={6}
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

export default LegislationTable;
