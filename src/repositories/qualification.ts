import { Qualification } from "@/entities";
import { getRepository } from "typeorm";

export class QualificationRepository {
  public async createQualification(
    id: string,
    grade: number,
    recruitId: string
  ) {
    const qualification = new Qualification();
    qualification.id = id;
    qualification.grade = grade;
    qualification.recruitId = recruitId;
    await getRepository(Qualification).save(qualification);
  }
}
