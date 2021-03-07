import { QualificationInsertType } from "@/interfaces";
import { QualificationRepository } from "@/repositories";

export class QualificationService {
  constructor(
    private readonly qualificationRepository: QualificationRepository
  ) {}

  public async createQualification(insertRequest: QualificationInsertType) {
    await this.qualificationRepository.createQualification(insertRequest);
  }
}
