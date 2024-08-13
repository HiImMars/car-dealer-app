export interface Item {
  id?: number;
  label?: string;
}

export interface Vehicle {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
}

export interface SelectedVehicle {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}

export interface Params {
  makeId: string;
  year: string;
}
