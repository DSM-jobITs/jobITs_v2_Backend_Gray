import { MealInsertType, MealUpdateType } from "@/interfaces";
import { MealRepository } from "@/repositories";

export class MealService {
  constructor(private readonly mealRepository: MealRepository) {}

  public async createMeal(insertRequest: MealInsertType) {
    await this.mealRepository.createMeal(insertRequest);
  }

  public async updateMeal(recruitId: string, updateRequest: MealUpdateType) {
    await this.mealRepository.updateMeal(recruitId, updateRequest);
  }
}
