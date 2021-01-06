import { Recruit, Enterprise } from "@/entities";
import { getRepository } from "typeorm";

export class RecruitRepository {
  public static async findOneById(id: string): Promise<Recruit> {
    return await getRepository(Recruit)
      .createQueryBuilder("recruit")
      .where("recruit.id = :id", { id })
      .getOne();
  }

  public static async getWritingRecruit() {
    return await getRepository(Recruit)
      .createQueryBuilder("recruit")
      .where("recruit.writing = :writing", { writing: true })
      .getMany();
  }

  public static async createRecruit(
    id: string,
    personnel: number,
    enterprise: Enterprise
  ) {
    const recruit = new Recruit();
    recruit.id = id;
    recruit.personnel = personnel;
    recruit.entNo = enterprise.entNo;
    recruit.page = 2;
    await getRepository(Recruit).save(recruit);
  }

  public static async addDetails(detail: string, id: string) {
    return await getRepository(Recruit)
      .createQueryBuilder("recruit")
      .update(Recruit)
      .set({ detail, page: 3 })
      .where("id = :id", { id })
      .execute();
  }

  public static async addThirdPageInfo(
    startTime: string,
    endTime: string,
    salary: number,
    period: number,
    id: string
  ) {
    return await getRepository(Recruit)
      .createQueryBuilder("recruit")
      .update(Recruit)
      .set({ startTime, endTime, salary, period })
      .where("id = :id", { id })
      .execute();
  }
}
