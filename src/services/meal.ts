import { MealInsertType } from "@/interfaces";
import { MealRepository } from "@/repositories";

export class MealService {
  constructor(private readonly mealRepository: MealRepository) {}

  public async createMeal(insertRequest: MealInsertType) {
    await this.mealRepository.createMeal(insertRequest);
  }
}
