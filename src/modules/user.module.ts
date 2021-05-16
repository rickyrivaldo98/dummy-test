import { Module } from '@nestjs/common';
import { userController } from 'src/controllers/user.controller';
import { userService } from 'src/services/user.service';

@Module({
  imports: [],
  controllers: [userController],
  providers: [userService],
})
export class userModule {}
