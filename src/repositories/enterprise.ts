import { Enterprise } from "@/entities";
import { getRepository } from "typeorm";

export class EnterpriseRepository {
  public static async createEnterprise(
    name: string,
    entNo: string,
    phone: string,
    sales: number,
    sector: string,
    establishmentDate: string,
    address: string,
    zipCode: string
  ): Promise<Enterprise> {
    const enterprise: Enterprise = new Enterprise();
    enterprise.name = name;
    enterprise.entNo = entNo;
    enterprise.phone = phone;
    enterprise.sales = sales;
    enterprise.sector = sector;
    enterprise.establishmentDate = establishmentDate;
    enterprise.address = address;
    enterprise.zipCode = zipCode;
    return await getRepository(Enterprise).save(enterprise);
  }

  public static async addIntroduce(introduce: string, entNo: string) {
    console.log(1);
    return await getRepository(Enterprise)
      .createQueryBuilder("enterprise")
      .update(Enterprise)
      .set({ introduce })
      .where("entNo = :entNo", { entNo })
      .execute();
  }
}
