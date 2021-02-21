import { Controller, Post, Body, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateUserDto } from '../dto/create-user.dto';
import { LoginService } from '../services/login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  Login(@Body() CreateUserDto: CreateUserDto, @Res() res: Response) {
    const result = this.loginService.login(CreateUserDto);
    return res.send({ result });
  }
}
