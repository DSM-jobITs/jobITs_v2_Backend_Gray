import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Depart } from "./depart";

@Entity()
export class Student {
  @PrimaryColumn({ name: "std_no", type: "char", length: 4 })
  stdNo: string;

  @Column({ nullable: false, length: 15 })
  id: string;

  @Column({ nullable: false, length: 50 })
  password: string;

  @Column({ nullable: false, length: 5 })
  name: string;

  @OneToOne((type) => Depart, (depart) => depart.id)
  @JoinColumn({ name: "depart_id" })
  depart: Depart;
}
