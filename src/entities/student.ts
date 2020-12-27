import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Depart } from "./depart";
import { ValidationEntity } from "./validation";
import { IsNotEmpty, Length } from "class-validator";

@Entity()
export class Student extends ValidationEntity {
  @PrimaryColumn({ name: "std_no", type: "char", length: 4 })
  stdNo: string;

  @Column({ nullable: false, length: 15 })
  @Length(6)
  @IsNotEmpty()
  id: string;

  @Column({ nullable: false, length: 50 })
  @IsNotEmpty()
  password: string;

  @Column({ nullable: false, length: 5 })
  @IsNotEmpty()
  name: string;

  @OneToOne((type) => Depart, (depart) => depart.id)
  @JoinColumn({ name: "depart_id" })
  depart: Depart;
}
