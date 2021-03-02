import { Welfare } from "@/entities";
import { getRepository } from "typeorm";

export class WelfareRepository {
  public async createWelfare(
    recruitId: string,
    fourMajor: boolean,
    selfDevelop: boolean,
    labtop: boolean,
    etc: string
  ) {
    const welfare = new Welfare();
    welfare.recruitId = recruitId;
    welfare.fourMajor = fourMajor;
    welfare.selfDevelop = selfDevelop;
    welfare.laptop = labtop;
    welfare.etc = etc;
    await getRepository(Welfare).save(welfare);
  }
}
