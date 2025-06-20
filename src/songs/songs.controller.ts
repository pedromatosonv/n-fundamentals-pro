import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';
import { Song } from './entities/song.entity';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}

  @Get()
  async findAll(): Promise<Song[]> {
    return await this.songsService.findAll();
  }

  @Get(':id')
  async findById(
    @Param('id', new ParseIntPipe())
    id: number,
  ): Promise<Song | null> {
    return await this.songsService.findById(id);
  }

  @Post()
  async create(@Body() input: CreateSongDTO): Promise<Song> {
    return await this.songsService.create(input);
  }

  @Put(':id')
  async update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() input: Partial<CreateSongDTO>,
  ): Promise<UpdateResult> {
    return await this.songsService.update(id, input);
  }

  @Delete(':id')
  async delete(
    @Param('id', new ParseIntPipe()) id: number,
  ): Promise<DeleteResult> {
    return await this.songsService.remove(id);
  }
}
