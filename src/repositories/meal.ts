import { Meal } from "@/entities";
import { AlreadyExistsData } from "@/exception";
import { MealInsertType } from "@/interfaces";
import { EntityRepository, getRepository } from "typeorm";

@EntityRepository(Meal)
export class MealRepository {
  public async createMeal(insertRequest: MealInsertType) {
    try {
      await getRepository(Meal)
        .createQueryBuilder("qualification")
        .insert()
        .into(Meal)
        .values(insertRequest)
        .execute();
    } catch (e) {
      throw AlreadyExistsData;
    }
  }
}
