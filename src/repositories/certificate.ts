import { Certificate } from "@/entities";
import { AlreadyExistsData } from "@/exception";
import { CertificateInsertType } from "@/interfaces";
import { EntityRepository, getRepository } from "typeorm";

@EntityRepository(Certificate)
export class CertificateRepository {
  public async createCertificate(insertRequest: CertificateInsertType) {
    try {
      await getRepository(Certificate)
        .createQueryBuilder("certificate")
        .insert()
        .into(Certificate)
        .values(insertRequest)
        .execute();
    } catch (e) {
      throw AlreadyExistsData;
    }
  }
  public async deleteCertificates(qualificationId: string) {
    await getRepository(Certificate)
      .createQueryBuilder("certificate")
      .delete()
      .from(Certificate)
      .where("qualificationId = :qualificationId", { qualificationId })
      .execute();
  }
}
