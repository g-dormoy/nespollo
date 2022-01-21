// this file contains the main app module
// It s the root of the application
// Configuration is done with environment variables
// This is where our graphql server is created
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { EquipmentModule } from './Equipment/equipment.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    EquipmentModule,
    MongooseModule.forRoot(process.env.MONGO_URL),
    GraphQLModule.forRoot({
      debug: process.env.NODE_ENV !== 'production' ? true : false,
      playground: process.env.NODE_ENV !== 'production' ? true : false,
      typePaths: ['schema/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
    }),
  ],
})
export class AppModule {}
