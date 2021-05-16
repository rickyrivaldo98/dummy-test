import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { get } from 'http';
import { userService } from 'src/services/user.service';

@Controller('user')
export class userController {
  constructor(private readonly userService: userService) {}

  @Get('mahasiswa')
  async getAlluserMahasiswa() {
    return await this.userService.getAlluserMahasiswa();
  }

  @Get('dosen')
  async getAlluserDosen() {
    return await this.userService.getAlluserDosen();
  }

  @Get(':nim')
  async getIdMahasiswa(@Param('nim') nim: string) {
    return {
      nama: 'anas',
      nim: nim,
    };
  }

  @Post('tambah')
  async tambahMahasiswa(@Body() data: any) {
    return await this.userService.tambahMahasiswa(data);
  }
}
