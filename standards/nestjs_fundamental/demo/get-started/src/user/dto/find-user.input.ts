import { Field, InputType } from "@nestjs/graphql";
import { Int } from "type-graphql";

@InputType()
export class FindUserInput {
  @Field(() => String, {nullable: true})
  keyword: string;

  @Field(() => Int, {nullable: true})
  page: number = 1

  @Field(() => Int, {nullable: true})
  pageSize: number = 20
}