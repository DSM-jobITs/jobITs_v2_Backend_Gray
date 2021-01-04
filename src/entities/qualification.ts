import {
  Entity,
  PrimaryColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { ValidationEntity } from "./validation";
import { Min, Max } from "class-validator";
import { Recruit } from "./recruit";
import { Certificate } from "./certificate";
import { Specialty } from "./specialty";

@Entity()
export class Qualification extends ValidationEntity {
  @PrimaryColumn({ length: 30 })
  id: string;

  @Column({ nullable: false })
  @Min(1)
  @Max(100)
  grade: number;

  @OneToOne((type) => Recruit, (recruit) => recruit.id, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  })
  @JoinColumn()
  recruit: Recruit;

  @OneToMany((type) => Certificate, (certificate) => certificate.qualification)
  certficates!: Certificate[];

  @OneToMany((type) => Specialty, (specialty) => specialty.qualification)
  specialties!: Specialty[];
}
