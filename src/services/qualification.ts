import { Qualification } from "@/entities";
import { QualificationInsertType, QualificationUpdateType } from "@/interfaces";
import { QualificationRepository } from "@/repositories";

export class QualificationService {
  constructor(
    private readonly qualificationRepository: QualificationRepository
  ) {}

  public async createQualification(insertRequest: QualificationInsertType) {
    await this.qualificationRepository.createQualification(insertRequest);
  }

  public async updateQualification(
    recruitId: string,
    updateRequest: QualificationUpdateType
  ) {
    await this.qualificationRepository.updateQualification(
      recruitId,
      updateRequest
    );
  }

  public async findQualification(recruitId: string): Promise<Qualification> {
    return await this.qualificationRepository.findQualification(recruitId);
  }
}
