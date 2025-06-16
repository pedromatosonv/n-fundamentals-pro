import { Injectable } from '@nestjs/common';

export type Song = {
  name: string
}

@Injectable()
export class SongsService {
  private readonly songs: Song[] = [];

  create(name: string): void {
    this.songs.push({ name });
  }

  findAll(): Song[] {
    return this.songs
  }
}
