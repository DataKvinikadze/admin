import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import Link from "next/link";
import { Pen, Trash2 } from "lucide-react";
import { GovernanceRating } from "@/types/governanceType";

export type RatingsProps = {
  searchTerm: string;
  limit?: number;
  title?: string;
  govarnceData: GovernanceRating[];
};

const GovernanceTable = ({ searchTerm, govarnceData }: RatingsProps) => {
  if (searchTerm) {
    govarnceData = govarnceData.filter((item) =>
      item.institution.en.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  return (
    <div className="mt-6">
      <div className="rounded-xl border shadow-md overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="h-12">
              <TableHead>Institution</TableHead>
              <TableHead>Term</TableHead>
              <TableHead>
                Shareholders <br /> Point
              </TableHead>
              <TableHead>
                Shareholders <br /> View
              </TableHead>
              <TableHead>
                Disclosure <br /> Point
              </TableHead>
              <TableHead>
                Disclosure <br /> View
              </TableHead>
              <TableHead>
                Stakeholders <br /> Point
              </TableHead>
              <TableHead>
                Stakeholders <br /> View
              </TableHead>
              <TableHead>
                Board <br /> Point
              </TableHead>
              <TableHead>
                Board <br /> View
              </TableHead>
              <TableHead>
                Institution <br /> Point
              </TableHead>
              <TableHead>
                Institution <br /> View
              </TableHead>
              <TableHead>Document</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {govarnceData.map((rating) => (
              <TableRow
                key={rating._id}
                className="hover:bg-muted/60 transition-colors h-12"
              >
                <TableCell className="font-medium truncate max-w-[180px]">
                  {rating.institution.en}
                </TableCell>
                <TableCell>{rating.ratingTerm}</TableCell>
                <TableCell>{rating.ratingDetails.shareholdersPoint}</TableCell>
                <TableCell>{rating.ratingDetails.shareholdersView}</TableCell>
                <TableCell>{rating.ratingDetails.disclosurePoint}</TableCell>
                <TableCell>{rating.ratingDetails.disclosureView}</TableCell>
                <TableCell>{rating.ratingDetails.stakeholdersPoint}</TableCell>
                <TableCell>{rating.ratingDetails.stakeholdersView}</TableCell>
                <TableCell>{rating.ratingDetails.boardPoint}</TableCell>
                <TableCell>{rating.ratingDetails.boardView}</TableCell>
                <TableCell>{rating.ratingDetails.institutionPoint}</TableCell>
                <TableCell>{rating.ratingDetails.institutionView}</TableCell>
                <TableCell>PDF</TableCell>
                <TableCell className="text-right flex gap-2 ">
                  <div className="flex justify-end items-center gap-3">
                    <Link href={`/ratings/governance/edit/${rating._id}`}>
                      <Pen className="w-4 h-4 text-primary" />
                    </Link>
                    <Trash2 className="w-4 h-4 text-destructive" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {govarnceData.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={14}
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

export default GovernanceTable;
