import { User } from "@/entities";
import { EntityRepository, getRepository } from "typeorm";

@EntityRepository(User)
export class UserRepository {
  public static async findOneById(id: string) {
    return await getRepository(User)
      .createQueryBuilder("user")
      .where("user.id = :id", { id })
      .getOne();
  }
}
