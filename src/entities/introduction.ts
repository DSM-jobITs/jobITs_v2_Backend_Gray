import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Enterprise } from "./enterprise";
import { ValidationEntity } from "./validation";

@Entity()
export class Introduction extends ValidationEntity {
  @PrimaryColumn({ length: 30 })
  id: string;

  @Column({ length: 30 })
  file: string;

  @ManyToOne((type) => Enterprise, (enterprise) => enterprise.entNo, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "ent_no" })
  enterprise!: Enterprise;
}
