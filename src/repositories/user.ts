import { User } from "@/entities";
import { getRepository } from "typeorm";

export class UserRepository {
  public static async findOneById(id: string) {
    return await getRepository(User)
      .createQueryBuilder("user")
      .where("user.id = :id", { id })
      .getOne();
  }
}
