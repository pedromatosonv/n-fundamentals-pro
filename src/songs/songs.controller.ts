import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Song, SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {
  constructor(
    private songsService: SongsService
  ) { }

  @Get()
  findAll(): Song[] {
    return this.songsService.findAll();
  }

  @Get(':id')
  findById(@Param() params): string {
    const { id } = params;
    return 'This action returns a song'
  }

  @Post()
  create(@Body() createSongDTO: CreateSongDTO): void {
    // TODO: add validation logic
    const { title } = createSongDTO;
    this.songsService.create(title);
  }

  @Put(':id')
  update(@Param('id') id: number): string {
    return 'This action updates a song'
  }

  @Delete(':id')
  delete(@Param('id') id: number): string {
    return 'This action deletes a song'
  }
}
