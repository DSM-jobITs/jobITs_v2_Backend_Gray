import { Entity, PrimaryColumn, Column } from "typeorm";
import { ValidationEntity } from "./validation";
import { IsNotEmpty, Max, Min } from "class-validator";

@Entity()
export class Depart extends ValidationEntity {
  @PrimaryColumn()
  @Min(1)
  @Max(4)
  id: number;

  @Column({ nullable: false, length: 20 })
  @IsNotEmpty()
  dept: string;
}
