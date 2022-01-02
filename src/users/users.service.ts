import { Injectable } from '@nestjs/common';
import { IUser } from './types';
import { UserSchema } from './user-model';

@Injectable()
export class UsersService {
  async findAll(): Promise<IUser[]> {
    const user = new UserSchema();
    user.id = '1';
    user.name = 'Rafael';

    return [user];
  }
}
