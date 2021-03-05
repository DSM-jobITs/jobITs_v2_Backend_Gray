import { SpecialtyInsertType } from "@/interfaces";
import { SpecialtyRepository } from "@/repositories";

export class SpecialtyService {
  constructor(private readonly specialtyRepository: SpecialtyRepository) {}

  public async createSpecialty(insertRequest: SpecialtyInsertType) {
    await this.specialtyRepository.createSpecialty(insertRequest);
  }
}
