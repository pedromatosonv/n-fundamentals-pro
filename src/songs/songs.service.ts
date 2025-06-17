import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  private readonly songs: any[] = [];

  create(title: string): void {
    this.songs.push({ title });
  }

  findAll() {
    return this.songs;
  }
}
