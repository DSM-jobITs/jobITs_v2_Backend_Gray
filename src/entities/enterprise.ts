import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class Enterprise {
  @PrimaryColumn({ length: 50 })
  id: string;

  @Column({ length: 30 })
  name: string;
}
