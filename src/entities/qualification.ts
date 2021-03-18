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

@Entity()
export class Qualification extends ValidationEntity {
  @PrimaryColumn({ name: "qualification_id", length: 30 })
  qualificationId: string;

  @Column({ nullable: true })
  @Min(1)
  @Max(100)
  grade: number;

  @Column({ nullable: true })
  specialty: string;

  @Column({ name: "recruit_id", length: 30 })
  recruitId: string;

  @OneToOne((type) => Recruit, (recruit) => recruit.recruitId, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "recruit_id", referencedColumnName: "recruitId" })
  recruit: Recruit;

  @OneToMany((type) => Certificate, (certificate) => certificate.qualification)
  certficates!: Certificate[];
}
