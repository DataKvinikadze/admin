import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const LegislationToolbar = ({
  searchTerm,
  setSearchTerm,
}: {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="flex justify-between items-center rounded-md">
      <div className="max-w-[300px] w-full flex justify-between items-center relative">
        <Search className="mr-2 w-4 h-4 absolute left-2 top-1/2 transform -translate-y-1/2" />
        <Input
          className="w-full pl-8"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search research..."
        />
      </div>
      <div>
        <Button onClick={() => console.log(searchTerm)}>Add Legislation</Button>
      </div>
    </div>
  );
};

export default LegislationToolbar;
