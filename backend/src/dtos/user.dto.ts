import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { User } from '@prisma/client';

export class UserDto implements Partial<User> {
  @ApiProperty()
  id: number;

  @ApiPropertyOptional()
  email?: string;

  @ApiPropertyOptional()
  name?: string;
}
