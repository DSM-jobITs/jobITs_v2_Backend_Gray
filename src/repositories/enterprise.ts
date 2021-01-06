import { Enterprise } from "@/entities";
import { writeFirstRecruitRequest } from "@/interfaces";
import { getRepository } from "typeorm";

export class EnterpriseRepository {
  public static async createEnterprise(
    req: writeFirstRecruitRequest
  ): Promise<Enterprise> {
    const enterprise: Enterprise = new Enterprise();
    enterprise.name = req.name;
    enterprise.entNo = req.entNo;
    enterprise.phone = req.phone;
    enterprise.sales = req.sales;
    enterprise.sector = req.sector;
    enterprise.establishmentDate = req.establishmentDate;
    enterprise.address = req.address;
    enterprise.zipCode = req.zipCode;
    return await getRepository(Enterprise).save(enterprise);
  }
}
