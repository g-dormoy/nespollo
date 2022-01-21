// EquipmentODT
// This is the class used to validate the equipment input during transfert
import { IsNotEmpty } from "class-validator";

export class EquipmentODT {
    @IsNotEmpty()
    name: string
}