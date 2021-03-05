import { Meal } from "@/entities";
import { MealInsertType } from "@/interfaces";
import { EntityRepository, getRepository } from "typeorm";

@EntityRepository(Meal)
export class MealRepository {
  public async createMeal(insertRequest: MealInsertType) {
    await getRepository(Meal)
      .createQueryBuilder("qualification")
      .insert()
      .into(Meal)
      .values(insertRequest);
  }
}
