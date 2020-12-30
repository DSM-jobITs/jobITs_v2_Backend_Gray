import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { ValidationEntity } from "./validation";
import { Student } from "./student";

@Entity()
export class User extends ValidationEntity {
  @PrimaryColumn({ length: 15 })
  id: string;

  @Column({ length: 50 })
  password: string;

  @Column({ length: 5 })
  name: string;

  @OneToOne((type) => Student, (student) => student.id)
  @JoinColumn({ name: "id" })
  student: Student;
}
