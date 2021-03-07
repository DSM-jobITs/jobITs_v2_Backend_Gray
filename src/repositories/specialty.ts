import { Specialty } from "@/entities";
import { AlreadyExistsData } from "@/exception";
import { SpecialtyInsertType } from "@/interfaces";
import { EntityRepository, getRepository } from "typeorm";

@EntityRepository(Specialty)
export class SpecialtyRepository {
  public async createSpecialty(insertRequest: SpecialtyInsertType) {
    try {
      await getRepository(Specialty)
        .createQueryBuilder("qualification")
        .insert()
        .into(Specialty)
        .values(insertRequest)
        .execute();
    } catch (e) {
      throw AlreadyExistsData;
    }
  }
}
