import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class Depart {
  @PrimaryColumn()
  id: number;

  @Column({ length: 20 })
  dept: string;
}
