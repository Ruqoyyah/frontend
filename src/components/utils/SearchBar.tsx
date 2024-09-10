import { Input } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { MdOutlineSearch } from "react-icons/md";
type searchProps = {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
};

export default function SearchBar({ searchTerm, setSearchTerm }: searchProps) {
  return (
    <div className="w-full flex items-center gap-2 px-5 rounded-full border-[1px] border-[#EBEBEB] ">
      <MdOutlineSearch className="text-[#A4AAB2]" />

      <Input
        border={"none"}
        focusBorderColor="none"
        p={0}
        type="text"
        outline={"none"}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
}
