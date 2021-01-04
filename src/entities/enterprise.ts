import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm";
import { Introduction } from "./introduction";
import { ValidationEntity } from "./validation";
import { Recruit } from "./recruit";

@Entity()
export class Enterprise extends ValidationEntity {
  @PrimaryColumn({ length: 12, type: "char", name: "ent_no" })
  entNo: string;

  @Column({ length: 30, nullable: false })
  name: string;

  @Column({ length: 13, type: "char", nullable: false })
  phone: string;

  @Column({ length: 15, name: "establishment_date", nullable: false })
  establishmentDate: string;

  @Column({ type: "float" })
  sales: number;

  @Column({ length: 255, nullable: false })
  introduce: string;

  @Column({ length: 50, nullable: false })
  sector: string;

  @Column({ length: 40, nullable: false })
  address: string;

  @Column({ length: 5, type: "char", nullable: false, name: "zip_code" })
  zipCode: string;

  @OneToMany((type) => Recruit, (recruit) => recruit.enterprise)
  recruits!: Recruit[];

  @OneToMany((type) => Introduction, (introduction) => introduction.enterprise)
  introductinos!: Introduction[];
}
