import { DataSource } from 'typeorm';
import { VehiclePhoto } from './vehicle-photo/entities/vehicle-photo.entity';
import { TransportCategory } from './transport-category/entities/transport-category.entity';
import { Vehicle } from './vehicle/entities/vehicle.entity';
import { Brand } from './brands/entities/brands.entity';
import { Photographer } from './vehicle-photo/entities/photographer.entity';
import { Country } from './country/entities/country.entity';
import { Bodywork } from './vehicle/entities/bodyworks.entity';
import { Chassis } from './vehicle/entities/chassis.entity';
import { Company } from './company/entities/company.entity';
import { CompanySerial } from './company/entities/company-serial.entity';
import { CompanyService } from './company/entities/company-service.entity';
import { VehicleType } from './vehicle/entities/vehicle-type.entity';

import { Model } from './vehicle/entities/vehicle-model.entity';

import { Posts } from './posts/post.entity';

import { config } from 'dotenv';
config();

export const AppDataSource = new DataSource({
  type: 'postgres', // o "sqlite", "mysql", etc.
  url: process.env.DATABASE_PUBLIC_URL,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD, 
  database: process.env.DB_DATABASE,
  synchronize: false,
  migrationsRun: true, // ⚠️ ¡muy importante!
  dropSchema: true,
  logging: true,
  entities: [
    Posts,
    VehiclePhoto,
    Photographer,
    TransportCategory,
    Vehicle,
    Model,
    Bodywork,
    Chassis,
    Brand,
    Country,
    Company,
    CompanySerial,
    CompanyService,
    VehicleType,    
  ],  
  migrations: ['src/migrations/*.ts'],
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
