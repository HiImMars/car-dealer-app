import { Vehicle } from "@/types";

const ENDPOINT = "etMakesForVehicleType/car?format=json";

export async function getFilters() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}${ENDPOINT}` || ""
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    const formattedItems = data.Results.map((item: Vehicle) => ({
      id: item.MakeId,
      label: item.MakeName,
    }));
    return formattedItems;
  } catch (error) {
    throw error
  }
}
