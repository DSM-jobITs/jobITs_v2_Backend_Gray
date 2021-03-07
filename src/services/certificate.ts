import { CertificateInsertType } from "@/interfaces";
import { CertificateRepository } from "@/repositories";

export class CertificateService {
  constructor(private readonly certificateRepository: CertificateRepository) {}

  public async createCertificate(insertRequest: CertificateInsertType) {
    await this.certificateRepository.createCertificate(insertRequest);
  }
}
