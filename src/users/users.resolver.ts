import { Query, Resolver } from '@nestjs/graphql';
import { IUser } from './types';
import { UserSchema } from './user-model';
import { UsersService } from './users.service';

@Resolver(() => UserSchema)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [UserSchema])
  async users(): Promise<IUser[]> {
    return this.usersService.findAll();
  }
}
