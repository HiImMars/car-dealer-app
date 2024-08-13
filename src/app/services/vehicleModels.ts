import { SelectedVehicle } from "@/types";

export async function getVehicleModels(
  makeId: string,
  year: string
): Promise<SelectedVehicle[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch vehicles: ${res.statusText}`);
    }

    const data = await res.json();
    return data.Results || [];
  } catch (error) {
    throw error;
  }
}
