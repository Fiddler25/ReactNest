import { Controller, Post, Body, Res, Get } from '@nestjs/common';
import { Response } from 'express';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}

  @Get()
  findAll() {
    return this.UsersService.findAll();
  }

  @Post('login')
  Login(@Body() CreateUserDto: CreateUserDto, @Res() res: Response) {
    const result = this.UsersService.login(CreateUserDto);
    return res.send({ result });
  }
}
