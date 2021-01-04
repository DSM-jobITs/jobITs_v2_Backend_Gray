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

  @Column({ length: 5, type: "char", nullable: false, name: "start_time" })
  startTime: string;

  @Column({ length: 5, type: "char", nullable: false, name: "end_time" })
  endTime: string;

  @Column({ nullable: false })
  salary: number;

  @Column({ nullable: false })
  period: number;

  @OneToOne((type) => Enterprise, (enterprise) => enterprise.entNo, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "ent_no" })
  enterprise: Enterprise;
}
