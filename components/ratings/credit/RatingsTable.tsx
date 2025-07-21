import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table";
import { RatingEntry } from "@/types/ratingsType";
import Link from "next/link";
import { Pen, Trash2 } from "lucide-react";

export type RatingsProps = {
  searchTerm: string;
  creditData: RatingEntry[];
};

const RatingsTable = ({ creditData, searchTerm }: RatingsProps) => {
  if (searchTerm) {
    creditData = creditData.filter((item) =>
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
              <TableHead>
                Published <br /> Date
              </TableHead>
              <TableHead>
                International <br /> Currency
              </TableHead>
              <TableHead>
                International <br /> Currency
              </TableHead>
              <TableHead>
                International <br /> Outlook
              </TableHead>
              <TableHead>
                National <br /> Rating
              </TableHead>
              <TableHead>
                National <br /> Outlook
              </TableHead>
              <TableHead>
                Sponsored <br /> Support
              </TableHead>
              <TableHead>
                Stand <br /> Alone
              </TableHead>
              <TableHead>
                Document
              </TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {creditData.map((rating: RatingEntry) => (
              <TableRow className="h-12" key={rating.id}>
                <TableCell>{rating.institution.en}</TableCell>
                <TableCell>{rating.ratingTerm}</TableCell>
                <TableCell>{rating.publishedDate}</TableCell>
                <TableCell>
                  {rating.ratingDetails.intlForeignCurrency}
                </TableCell>
                <TableCell>{rating.ratingDetails.intlLocalCurrency}</TableCell>
                <TableCell>{rating.ratingDetails.intlOutlook}</TableCell>
                <TableCell>{rating.ratingDetails.nationalOutlook}</TableCell>
                <TableCell>{rating.ratingDetails.nationalRating}</TableCell>
                <TableCell>{rating.ratingDetails.sponsoredSupport}</TableCell>
                <TableCell>{rating.ratingDetails.standAlone}</TableCell>
                <TableCell>PDF</TableCell>
                <TableCell className="flex text-right  gap-2 ">
                  <div className="flex justify-end items-center gap-3">
                    <Link href={`/ratings/credit/edit/${rating.id}`}>
                      <Pen className="w-4 h-4 text-primary" />
                    </Link>
                    <Trash2 className="w-4 h-4 text-destructive" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {creditData.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={11}
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

export default RatingsTable;
