import { Injectable } from '@nestjs/common';
import { CreateSongDTO } from './dto/create-song-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Song } from './entities/song.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class SongsService {
  constructor(
    @InjectRepository(Song)
    private songRepository: Repository<Song>,
  ) {}

  async create(input: CreateSongDTO): Promise<Song> {
    return await this.songRepository.save(input);
  }

  async findAll(): Promise<Song[]> {
    return await this.songRepository.find();
  }

  async findById(id: number): Promise<Song | null> {
    return await this.songRepository.findOne({ where: { id } });
  }

  async update(
    id: number,
    input: Partial<CreateSongDTO>,
  ): Promise<UpdateResult> {
    return await this.songRepository.update(id, input);
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.songRepository.delete(id);
  }
}
