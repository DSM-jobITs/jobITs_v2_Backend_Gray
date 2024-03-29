import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { ValidationEntity } from "./validation";
import { IsEmail, IsMobilePhone } from "class-validator";
import { Enterprise } from "./enterprise";

@Entity()
export class Manager extends ValidationEntity {
  @PrimaryColumn({ length: 12, type: "char", name: "ent_no" })
  entNo: string;

  @Column({ length: 20, name: "manager_rank", nullable: false })
  managerRank: string;

  @Column({ length: 14, type: "char", name: "manager_phone", nullable: false })
  @IsMobilePhone("ko-KR")
  managerPhone: string;

  @Column({ length: 30, name: "manager_email", nullable: false })
  @IsEmail()
  managerEmail: string;

  @Column({ length: 5, name: "manager_name", nullable: false })
  managerName: string;

  @OneToOne((type) => Enterprise, (enterprise) => enterprise.entNo, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "ent_no" })
  enterprise: Enterprise;
}
