import { Certificate } from "@/entities";
import { AlreadyExistsData } from "@/exception";
import { CertificateInsertType } from "@/interfaces";
import { EntityRepository, getRepository } from "typeorm";

@EntityRepository(Certificate)
export class CertificateRepository {
  public async createCertificate(insertRequest: CertificateInsertType) {
    try {
      await getRepository(Certificate)
        .createQueryBuilder("enterprise")
        .insert()
        .into(Certificate)
        .values(insertRequest)
        .execute();
    } catch (e) {
      throw AlreadyExistsData;
    }
  }
}
