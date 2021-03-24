import { Qualification } from "@/entities";
import { AlreadyExistsData } from "@/exception";
import { QualificationInsertType, QualificationUpdateType } from "@/interfaces";
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
  public async updateQualification(
    recruitId: string,
    updateRequest: QualificationUpdateType
  ) {
    await getRepository(Qualification)
      .createQueryBuilder("qualification")
      .update(Qualification)
      .set(updateRequest)
      .where("recruitId = :recruitId", { recruitId })
      .execute();
  }
  public async findQualification(recruitId: string): Promise<Qualification> {
    return await getRepository(Qualification)
      .createQueryBuilder("qualification")
      .where("recruitId = :recruitId", { recruitId })
      .getOne();
  }
}
