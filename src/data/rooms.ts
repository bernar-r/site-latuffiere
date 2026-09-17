import roomsData from "./rooms.json";

export interface Room {
  name: string;
  beds: string;
  capacity: number;
  floor: string;
  pmr?: boolean;
  tag: string;
  description?: string;
}

export const rooms: Room[] = roomsData.rooms;
export const equipment: string[] = roomsData.equipment;
