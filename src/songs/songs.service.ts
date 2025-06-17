import { Injectable } from '@nestjs/common';

export type Song = {
  title: string;
};

@Injectable()
export class SongsService {
  private readonly songs: Song[] = [];

  create(title: string): void {
    this.songs.push({ title });
  }

  findAll(): Song[] {
    // return this.songs;
    throw new Error('DB connection error');
  }
}
