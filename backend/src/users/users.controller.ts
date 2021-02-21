import { Controller, Post, Body, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('login')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}

  @Post()
  Login(@Body() CreateUserDto: CreateUserDto, @Res() res: Response) {
    const result = this.UsersService.login(CreateUserDto);
    return res.send({ result });
  }
}
