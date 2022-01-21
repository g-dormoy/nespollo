// equipment.resolver.ts
// this file contains the equipment resolver
// Equipment resolver is the class that will resolve the queries
//  and mutations of the Equipment model on the GraphQL API
import { Args, Query, Resolver, Mutation } from "@nestjs/graphql";
import { EquipmentService } from "./equipment.service";
import { EquipmentODT } from "./equipement.odt";

@Resolver()
export class EquipementResolver {
    constructor(private readonly EquipmentService: EquipmentService) {}

    @Query()
    async equipment(@Args('id') id: string) {
        return this.EquipmentService.find(id);
    }

    @Query()
    async equipments() {
        return this.EquipmentService.findAll();
    }

    @Mutation()
    async createEquipment(@Args('input') input: EquipmentODT) {
        return this.EquipmentService.create(input);
    }
}