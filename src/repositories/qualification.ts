import { Qualification } from "@/entities";
import { QualificationInsertType } from "@/interfaces";
import { EntityRepository, getRepository } from "typeorm";

@EntityRepository(Qualification)
export class QualificationRepository {
  public async createQualification(insertRequest: QualificationInsertType) {
    await getRepository(Qualification)
      .createQueryBuilder("qualification")
      .insert()
      .into(Qualification)
      .values(insertRequest);
  }
}
