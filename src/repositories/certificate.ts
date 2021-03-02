import { Certificate } from "@/entities";
import { getRepository } from "typeorm";

export class CertificateRepository {
  public async createCertificate(
    id: string,
    certificate: string,
    qualificationId: string
  ) {
    const certificateEntity = new Certificate();
    certificateEntity.id = id;
    certificateEntity.certificate = certificate;
    certificateEntity.qualificationId = qualificationId;
    await getRepository(Certificate).save(certificateEntity);
  }
}
