import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PostSchema {
  @Field()
  id: string;

  @Field()
  text: string;
}
