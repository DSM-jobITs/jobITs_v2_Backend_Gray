import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { ValidationEntity } from "./validation";
import { Recruit } from "./recruit";

@Entity()
export class Meal extends ValidationEntity {
  @PrimaryColumn({ name: "recruit_id", length: 30 })
  recruitId: string;

  @Column({ type: "tinyint", default: false })
  breakfast: boolean;

  @Column({ type: "tinyint", default: false })
  lunch: boolean;

  @Column({ type: "tinyint", default: false })
  dinner: boolean;

  @Column({ type: "tinyint", default: false, name: "salary" })
  mealSalary: boolean;

  @OneToOne((type) => Recruit, (recruit) => recruit.recruitId, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "recruit_id", referencedColumnName: "recruitId" })
  recruit: Recruit;
}
