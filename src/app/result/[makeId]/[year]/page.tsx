import { Suspense } from "react";
import { getFilters } from "@/app/services/filters";
import { FILTER_YEARS } from "@/app/components/Filter/constants";
import { Item, Params } from "@/types";
import VehicleModels from "@/app/components/VehicleModels/VehicleModels";
import Loader from "@/app/components/Loader/Loader";

interface ResultPageProps {
  params: Params;
}

export async function generateStaticParams() {
  const filterItems = await getFilters();

  const paths = filterItems
    .map((item: Item) => {
      return FILTER_YEARS.map((year) => ({
        makeId: item.id?.toString(),
        year: year.label,
      }));
    })
    .flat();

  return paths;
}

export default function ResultPage({ params }: ResultPageProps) {
  const { makeId, year } = params;

  return (
    <>
      <h1 className="bg-slate-800 text-white text-2xl sm:text-4xl font-bold text-center py-6 px-4">
        Cars in stock
      </h1>
      <div className="container">
        <Suspense fallback={<Loader />}>
          <VehicleModels makeId={makeId} year={year} />
        </Suspense>
      </div>
    </>
  );
}
