import { Specialty } from "@/entities";
import { getRepository } from "typeorm";

export class SpecialtyRepository {
  public async createSpecialty(
    id: string,
    specialty: string,
    qualificationId: string
  ) {
    const specialtyEntity = new Specialty();
    specialtyEntity.id = id;
    specialtyEntity.specialty = specialty;
    specialtyEntity.qualificationId = qualificationId;
    await getRepository(Specialty).save(specialtyEntity);
  }
}
