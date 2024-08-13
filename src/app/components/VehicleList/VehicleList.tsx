import { SelectedVehicle } from "@/types";

interface VehicleListProps {
  vehicleModels: SelectedVehicle[];
}

export default function VehicleList({ vehicleModels }: VehicleListProps) {
  return (
    <ul className="py-6 flex flex-col justify-center gap-6">
      {vehicleModels.map((vehicle) => (
        <li
          key={vehicle.Model_ID}
          className="p-4 bg-gray-100 rounded-lg shadow-base hover:shadow-baseAccent hover:text-orange-base transition-colors"
        >
          {vehicle.Make_Name} {vehicle.Model_Name}
        </li>
      ))}
    </ul>
  );
}
