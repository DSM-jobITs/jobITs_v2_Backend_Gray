import { Meal } from "@/entities";
import { getRepository } from "typeorm";

export class MealRepository {
  public static async createMeal(
    recruitId: string,
    breakfast: boolean,
    lunch: boolean,
    dinner: boolean,
    mealSalary: boolean
  ) {
    const meal = new Meal();
    meal.recruitId = recruitId;
    meal.breakfast = breakfast;
    meal.lunch = lunch;
    meal.dinner = dinner;
    meal.salary = mealSalary;
    await getRepository(Meal).save(meal);
  }
}
