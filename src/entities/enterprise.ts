import { Entity, PrimaryColumn, Column } from "typeorm";
import { ValidationEntity } from "./validation";

@Entity()
export class Enterprise extends ValidationEntity {
  @PrimaryColumn({ length: 50 })
  id: string;

  @Column({ length: 30 })
  name: string;
}
