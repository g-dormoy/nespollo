// equipment.schema.ts
// This file contains the equipment schema for mongoose
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty } from 'class-validator';
import { Document } from 'mongoose';

export type EquipmentDocument = Equipment & Document;

@Schema()
export class Equipment {
    id: string;

    @IsNotEmpty() // Make sure the name is not empty
    @Prop({ required: true }) // Make sure the name is required
    name: string;
}

export const EquipmentSchema = SchemaFactory.createForClass(Equipment);
