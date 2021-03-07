import { Specialty } from "@/entities";
import { SpecialtyInsertType } from "@/interfaces";
import { EntityRepository, getRepository } from "typeorm";

@EntityRepository(Specialty)
export class SpecialtyRepository {
  public async createSpecialty(insertRequest: SpecialtyInsertType) {
    await getRepository(Specialty)
      .createQueryBuilder("qualification")
      .insert()
      .into(Specialty)
      .values(insertRequest)
      .execute();
  }
}
