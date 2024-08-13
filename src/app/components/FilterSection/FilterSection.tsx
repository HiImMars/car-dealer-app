"use client";

import { Item } from "@/types";
import { useState } from "react";
import { FILTER_YEARS } from "../Filter/constants";
import Filter from "../Filter/Filter";
import NextButton from "../NextButton/NextButton";

interface FilterProps {
  filterItems: Item[];
}

export default function FilterSection({ filterItems }: FilterProps) {
  const [makeId, setMakeId] = useState<string | undefined>(undefined);
  const [year, setYear] = useState<string | undefined>(undefined);

  return (
    <div className="flex flex-col justify-center items-center gap-6 bg-white rounded-lg py-12 px-4 md:w-1/2 mx-auto">
      <h2 className="text-2xl font-medium">Find your dream car</h2>
      <div className="w-full">
        <p className="self-start text-xl font-medium mb-2">Car name</p>
        <Filter filterItems={filterItems} onSelect={setMakeId} />
      </div>
      <div className="w-full">
        <p className="self-start text-xl font-medium mb-2">Year</p>
        <Filter filterItems={FILTER_YEARS} onSelect={setYear} />
      </div>
      <NextButton makeId={makeId} year={year} />
    </div>
  );
}
