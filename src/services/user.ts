import { UserNotFound } from "@/exception";
import { UserRepository } from "@/repositories";

export class UserService {
  public static async getWritingPage(id: string): Promise<number> {
    const user = await UserRepository.findOneById(id);
    if (!user) throw UserNotFound;
    return user.page;
  }
}
