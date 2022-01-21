
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface EquipmentInput {
    name?: Nullable<string>;
}

export interface IMutation {
    createEquipment(input?: Nullable<EquipmentInput>): Nullable<Equipment> | Promise<Nullable<Equipment>>;
}

export interface IQuery {
    equipment(id: string): Nullable<Equipment> | Promise<Nullable<Equipment>>;
    equipments(): Nullable<Nullable<Equipment>[]> | Promise<Nullable<Nullable<Equipment>[]>>;
}

export interface Equipment {
    id: string;
    name: string;
}

type Nullable<T> = T | null;
