// equipment.service.ts
// This file contains the equipment service
// Equipment service is the class that will handle the equipment queries and mutations
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { EquipmentODT } from "./equipement.odt";
import { Equipment, EquipmentDocument } from "./equipment.schema";

@Injectable()
export class EquipmentService {
  constructor(@InjectModel(Equipment.name) private EquipmentModel: Model<EquipmentDocument>) {}

  find(id: string): Promise<Equipment> {
    return this.EquipmentModel.findById(id).exec();
  }

  findAll(): Promise<Equipment[]> {
    return this.EquipmentModel.find().exec();
  }

  create(input: EquipmentODT): Promise<Equipment> {
    const equipment = new this.EquipmentModel(input);
    return equipment.save();
  }
}