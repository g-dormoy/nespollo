// equipmebt.module.ts
// this file contains the equipment module initialization
// Equipment modules is means to be use with the GraphQL API to resolve Equipment queries
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EquipementResolver } from './equipment.resolver';
import { EquipmentService } from './equipment.service';
import { EquipmentSchema, Equipment } from './equipment.schema';



@Module({
  imports: [MongooseModule.forFeature([{ name: Equipment.name, schema: EquipmentSchema }])],
  providers: [EquipementResolver, EquipmentService],
})
export class EquipmentModule {}