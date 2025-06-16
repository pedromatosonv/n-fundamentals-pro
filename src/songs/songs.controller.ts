import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Song, SongsService } from './songs.service';

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
  create(@Body() body): void {
    // TODO: add validation logic
    const { name } = body;
    this.songsService.create(name);
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
