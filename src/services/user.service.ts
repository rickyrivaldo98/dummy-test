import { Injectable } from '@nestjs/common';

@Injectable()
export class userService {
  constructor() {}

  async getAlluserMahasiswa() {
    return {
      nama: 'ricky',
      nim: '24060117140054',
    };
  }

  async getAlluserDosen() {
    return {
      nama: 'fajar',
      nip: '1198820592277',
    };
  }

  async tambahMahasiswa(data) {
    return {
      nama: data.nama,
    };
  }
}
