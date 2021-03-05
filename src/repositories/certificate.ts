import { Certificate } from "@/entities";
import { CertificateInsertType } from "@/interfaces";
import { EntityRepository, getRepository } from "typeorm";

@EntityRepository(Certificate)
export class CertificateRepository {
  public async createCertificate(insertRequest: CertificateInsertType) {
    await getRepository(Certificate)
      .createQueryBuilder("enterprise")
      .insert()
      .into(Certificate)
      .values(insertRequest);
  }
}
