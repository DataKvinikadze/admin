import { governanceData } from "@/data/ratings/governance";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "../ui/table";
import { RatingsProps } from "./RatingsTable";
import Link from "next/link";
import { Button } from "../ui/button";

const GovernanceTable = ({ title, limit }: RatingsProps) => {
  return (
    <div className="mt-6">
      <div className="rounded-xl border shadow-md overflow-x-auto">
        <Table>
          <TableCaption className="text-sm text-muted-foreground p-2">
            {limit
              ? `Showing top ${limit} governance ratings`
              : "All Governance Ratings"}
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="min-w-[180px] h-12">Institution</TableHead>
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
            {governanceData.map((rating) => (
              <TableRow
                key={rating._id}
                className="hover:bg-muted/60 transition-colors"
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
                <TableCell>
                  <Button variant="link" className="text-blue-600 p-0 h-auto">
                    View
                  </Button>
                </TableCell>
                <TableCell className="text-right">
                  <Link href={`/ratings/governance/edit/${rating._id}`}>
                    <Button variant="secondary" size="sm">
                      Edit
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default GovernanceTable;
