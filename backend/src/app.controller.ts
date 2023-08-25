import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UserDto } from './dtos/user.dto';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('users')
  @ApiOkResponse({ type: UserDto, isArray: true })
  getUsers(): Promise<UserDto[]> {
    return this.appService.users({});
  }
}
