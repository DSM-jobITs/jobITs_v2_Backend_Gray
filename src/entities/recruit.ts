import {
  Entity,
  Column,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
} from "typeorm";
import { ValidationEntity } from "./validation";
import { Enterprise } from "./enterprise";
import { Qualification } from "./qualification";
import { Meal } from "./meal";
import { Welfare } from "./welfare";

@Entity()
export class Recruit extends ValidationEntity {
  @PrimaryGeneratedColumn({ name: "recruit_no" })
  recruitNo: number;

  @Column({ name: "recruit_id", length: 30, nullable: false, unique: true })
  recruitId: string;

  @Column({ length: 10, type: "char", nullable: true })
  reception: string;

  @Column({ length: 10, type: "char", nullable: true })
  deadline: string;

  @Column({ type: "tinyint", name: "recruit_plan", nullable: true })
  recruitPlan: boolean;

  @Column({
    length: 5,
    type: "char",
    name: "start_time",
    nullable: true,
    default: "09:00",
  })
  startTime: string;

  @Column({
    length: 5,
    type: "char",
    name: "end_time",
    nullable: true,
    default: "17:00",
  })
  endTime: string;

  @Column({ nullable: true })
  allowance: number;

  @Column({ nullable: true })
  salary: number;

  @Column({ nullable: true })
  period: number;

  @Column({ type: "tinyint", nullable: true, default: false })
  expired: boolean;

  @Column({ nullable: true })
  personnel: number;

  @Column({ nullable: true })
  detail: string;

  @Column({ name: "ent_no", length: 12 })
  entNo: string;

  @ManyToOne((type) => Enterprise, (enterprise) => enterprise.entNo, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "ent_no" })
  enterprise!: Enterprise;

  @OneToOne((type) => Qualification, (qualification) => qualification.recruit)
  qualification!: Qualification;

  @OneToOne((type) => Meal, (meal) => meal.recruit)
  meal!: Meal;

  @OneToOne((type) => Welfare, (welfare) => welfare.recruit)
  welfare!: Welfare;
}
