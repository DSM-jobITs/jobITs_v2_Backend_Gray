import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Enterprise } from "./enterprise";
import { ValidationEntity } from "./validation";

@Entity()
export class Introduction extends ValidationEntity {
  @PrimaryColumn({ length: 30 })
  id: string;

  @Column({ name: "original_name" })
  originalName: string;

  @Column({ length: 50, name: "file_uuid" })
  fileUuid: string;

  @Column({ length: 12, name: "ent_no" })
  entNo: string;

  @ManyToOne((type) => Enterprise, (enterprise) => enterprise.entNo, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "ent_no" })
  enterprise!: Enterprise;
}
