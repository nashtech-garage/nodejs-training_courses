import { Query, Resolver } from "@nestjs/graphql";
import { Role } from "./entities/role.entity";

@Resolver(() => Role)
export class RoleResolver {
  constructor() {}

  @Query(() => [Role], { name: 'role' })
  findAll() {
    throw new Error("random")
  }
}