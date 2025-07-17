import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table";
import { ratingData } from "@/data/ratings/ratings";
import { RatingEntry } from "@/types/ratings/ratings";
import Link from "next/link";
import { Button } from "../ui/button";

export type RatingsProps = {
  limit?: number;
  title?: string;
};

const RatingsTable = ({ limit, title }: RatingsProps) => {
  return (
    <div>
      <h3 className="text-lg font-semibold overflow-hidden text-ellipsis whitespace-nowrap py-3">{title ? title : "Ratings"}</h3>
      <Table>
        <TableCaption>
          {limit ? `Showing top ${limit} ratings` : "Credit ratings"}
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Institution</TableHead>
            <TableHead>Rating Term</TableHead>
            <TableHead>Published <br /> Date</TableHead>
            <TableHead>International <br /> Currency</TableHead>
            <TableHead>International <br /> Currency</TableHead>
            <TableHead>International <br /> Outlook</TableHead>
            <TableHead>National <br /> Rating</TableHead>
            <TableHead>National <br /> Outlook</TableHead>
            <TableHead>Sponsored <br /> Support</TableHead>
            <TableHead>Stand <br /> Alone</TableHead>
            <TableHead>View</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ratingData.map((rating) => (
            <TableRow key={rating.id}>
              <TableCell>{rating.institution}</TableCell>
              <TableCell>{rating.ratingTerm}</TableCell>
              <TableCell>{rating.publishedDate}</TableCell>
              <TableCell>{rating.intlForeignCurrency}</TableCell>
              <TableCell>{rating.intlLocalCurrency}</TableCell>
              <TableCell>{rating.intlOutlook}</TableCell>
              <TableCell>{rating.nationalRating}</TableCell>
              <TableCell>{rating.nationalOutlook}</TableCell>
              <TableCell>{rating.sponsoredSupport}</TableCell>
              <TableCell>{rating.standAlone}</TableCell>
              <TableCell>
                <Link href={`/ratings/credit/edit/${rating.id}`}><Button className="bg-blue-500 text-white">Edit</Button></Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RatingsTable;
