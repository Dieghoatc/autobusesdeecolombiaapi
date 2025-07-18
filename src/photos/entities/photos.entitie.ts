// Entity is a class that is used to define the structure of the table in the database

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  photo_id: number;

  @Column()
  category_id: number;

  @Column()
  type_id: number;

  @Column()
  url: string;

  @Column() 
  company: string;

  @Column()
  serial: string;

  @Column()
  bodywork: string;

  @Column()
  chassis: string;

  @Column()
  plate: string;

  @Column()
  service: string;

  @Column()
  author: string;

  @Column()
  id_international: number;

  @Column()
  country: string;

  @Column()
  location: string;

  @Column()
  create_at: string;
}
