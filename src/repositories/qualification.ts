import { Qualification } from "@/entities";
import { AlreadyExistsData } from "@/exception";
import { QualificationInsertType } from "@/interfaces";
import { EntityRepository, getRepository } from "typeorm";

@EntityRepository(Qualification)
export class QualificationRepository {
  public async createQualification(insertRequest: QualificationInsertType) {
    try {
      await getRepository(Qualification)
        .createQueryBuilder("qualification")
        .insert()
        .into(Qualification)
        .values(insertRequest)
        .execute();
    } catch (e) {
      throw AlreadyExistsData;
    }
  }
}
