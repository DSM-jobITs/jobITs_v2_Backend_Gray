import { Introduction } from "@/entities";
import { AlreadyExistsData } from "@/exception";
import { IntroductionInsertType } from "@/interfaces";
import { EntityRepository, getRepository } from "typeorm";

@EntityRepository(Introduction)
export class IntroductionRepository {
  public async creaetIntroduction(insertRequest: IntroductionInsertType) {
    try {
      await getRepository(Introduction)
        .createQueryBuilder("introduction")
        .insert()
        .into(Introduction)
        .values(insertRequest)
        .execute();
    } catch (e) {
      throw AlreadyExistsData;
    }
  }

  public async getIntroductions(entNo: string) {
    return await getRepository(Introduction)
      .createQueryBuilder("introduction")
      .select("original_name", "file_uuid")
      .where("ent_no = :ent_no", { ent_no: entNo })
      .getMany();
  }

  public async deleteIntroductions(entNo: string) {
    await getRepository(Introduction)
      .createQueryBuilder("introduction")
      .delete()
      .from(Introduction)
      .where("ent_no = :ent_no", { ent_no: entNo })
      .execute();
  }
}
