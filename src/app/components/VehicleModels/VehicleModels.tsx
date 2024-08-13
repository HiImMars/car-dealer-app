import { getVehicleModels } from "@/app/services/vehicleModels";
import VehicleList from "../VehicleList/VehicleList";
import { Params } from "@/types";

interface VehicleModelsProps extends Params {}

export default async function VehicleModels({
  makeId,
  year,
}: VehicleModelsProps) {
  const vehicleModels = await getVehicleModels(makeId, year);

  if (!vehicleModels.length) {
    return <p>No vehicles found for the selected make and year.</p>;
  }

  return <VehicleList vehicleModels={vehicleModels} />;
}
