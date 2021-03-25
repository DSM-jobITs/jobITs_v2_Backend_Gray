import { Meal } from "@/entities";
import { AlreadyExistsData } from "@/exception";
import { MealInsertType, MealUpdateType } from "@/interfaces";
import { EntityRepository, getRepository } from "typeorm";

@EntityRepository(Meal)
export class MealRepository {
  public async createMeal(insertRequest: MealInsertType) {
    try {
      await getRepository(Meal)
        .createQueryBuilder("meal")
        .insert()
        .into(Meal)
        .values(insertRequest)
        .execute();
    } catch (e) {
      throw AlreadyExistsData;
    }
  }
  public async updateMeal(recruitId: string, updateRequest: MealUpdateType) {
    await getRepository(Meal)
      .createQueryBuilder("meal")
      .update(Meal)
      .set(updateRequest)
      .where("recruitId = :recruitId", { recruitId })
      .execute();
  }
}
