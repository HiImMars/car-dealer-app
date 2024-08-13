import { Suspense } from "react";
import { getFilters } from "./services/filters";
import FilterSection from "./components/FilterSection/FilterSection";
import Loader from "./components/Loader/Loader";

export default async function Home() {
  const filterItems = await getFilters();

  return (
    <main>
      <h1 className="font-semibold text-5xl md:text-6xl text-center px-2 py-16 mb-10 bg-orange-base">
        Car Dealer App
      </h1>
      <div className="container">
        <Suspense fallback={<Loader />}>
          <FilterSection filterItems={filterItems} />
        </Suspense>
      </div>
    </main>
  );
}
