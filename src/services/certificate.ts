import { CertificateInsertType } from "@/interfaces";
import { CertificateRepository } from "@/repositories";

export class CertificateService {
  constructor(private readonly certificateRepository: CertificateRepository) {}

  public async createCertificate(insertRequest: CertificateInsertType) {
    await this.certificateRepository.createCertificate(insertRequest);
  }

  public async deleteCertificates(qualificationId: string) {
    await this.certificateRepository.deleteCertificates(qualificationId);
  }

  public async getCertificates(qualificationId: string) {
    return await this.certificateRepository.getCertificates(qualificationId);
  }
}
