import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  Entity,
} from "typeorm";

@Entity()
export class Base extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @CreateDateColumn()
  created_on?: Date;

  @UpdateDateColumn()
  updated_on?: Date;
}
