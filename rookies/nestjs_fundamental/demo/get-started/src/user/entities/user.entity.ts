import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Role } from './role.entity';
import { IsEmail } from "class-validator"

@ObjectType()
export class User {
  @Field(() => ID)
  id: string

  @Field(() => String)
  
  email: string

  @Field(() => [Role], { nullable: true })
  roles: Role[] = []
}
