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
    await getRepository(Recruit).save(recruit);
  }

  public static async addDetails(detail: string, id: string) {
    return await getRepository(Recruit)
      .createQueryBuilder("recruit")
      .update(Recruit)
      .set({ detail })
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

  public static async addPage(id: string) {
    await getRepository(Recruit)
      .createQueryBuilder("recruit")
      .update(Recruit)
      .set({ page: () => "page + 1" })
      .where("id = :id", { id })
      .execute();
  }

  public static async addFinalPageInfo(
    id: string,
    recruitPlan: string,
    reception: string,
    deadline: string
  ) {
    await getRepository(Recruit)
      .createQueryBuilder("recruit")
      .update(Recruit)
      .set({
        recruitPlan: (recruitPlan = "true") ? true : false,
        reception,
        deadline,
      })
      .where("id = :id", { id });
  }
}
