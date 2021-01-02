import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { ValidationEntity } from "./validation";
import { Enterprise } from "./enterprise";

@Entity()
export class Recruit extends ValidationEntity {
  @PrimaryColumn({ length: 30 })
  id: string;

  @Column({ length: 12, type: "char", nullable: false })
  reception: string;

  @Column({ length: 12, type: "char", nullable: false })
  deadline: string;

  @Column({ type: "tinyint", nullable: false, name: "recruit_plan" })
  recruitPlan: boolean;

  @OneToOne((type) => Enterprise, (enterprise) => enterprise.entNo, {
    cascade: true,
    eager: true,
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "ent_no" })
  enterprise: Enterprise;
}
