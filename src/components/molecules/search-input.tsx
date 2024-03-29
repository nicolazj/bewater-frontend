"use client";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

interface SearchInputProps extends React.ComponentPropsWithoutRef<"input"> {}
export function SearchInput(props: SearchInputProps) {
  return (
    <div className="flex items-center gap-2 relative">
      <div className="absolute pl-2">
        <MagnifyingGlassIcon className="text-grey-400" height={20} width={20} />
      </div>
      <input
        className="body-4 pl-8 border border-grey-800 bg-transparent block flex-1 outline-none text-white h-[36x] py-2 rounded focus:border-day"
        placeholder={props.placeholder ?? "Search for team or project name"}
        {...props}
      />
    </div>
  );
}
