import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  login(user: User): boolean {
    const { userId, password } = user;
    const result = userId === 'test' && password === 'test';
    return result;
  }
}
