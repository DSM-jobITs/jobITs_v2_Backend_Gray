import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm";
import { Introduction } from "./introduction";
import { ValidationEntity } from "./validation";

@Entity()
export class Enterprise extends ValidationEntity {
  @PrimaryColumn({ length: 12, type: "char", name: "ent_no" })
  entNo: string;

  @Column({ length: 30, nullable: false })
  name: string;

  @Column({ length: 12, type: "char", nullable: false })
  phone: string;

  @Column({ length: 15, name: "establishment_date", nullable: false })
  establishmentDate: string;

  @Column({ type: "float" })
  sales: number;

  @Column({ length: 255, nullable: false })
  introduce: string;

  @Column({ type: "tinyint", nullable: false })
  sector: boolean;

  @Column({ length: 40, nullable: false })
  address: string;

  @Column({ length: 5, type: "char", nullable: false, name: "zip_code" })
  zipCode: string;

  @OneToMany((type) => Introduction, (introduction) => introduction.enterprise)
  introductinos!: Introduction[];
}
