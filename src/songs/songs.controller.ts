import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Put,
} from '@nestjs/common';
import { Song, SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}

  @Get()
  findAll(): Song[] {
    try {
      return this.songsService.findAll();
    } catch (e) {
      throw new HttpException(
        'server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        { cause: e },
      );
    }
  }

  @Get(':id')
  findById(): string {
    return 'This action returns a song';
  }

  @Post()
  create(@Body() createSongDTO: CreateSongDTO): void {
    // TODO: add validation logic
    const { title } = createSongDTO;
    this.songsService.create(title);
  }

  @Put(':id')
  update(): string {
    return 'This action updates a song';
  }

  @Delete(':id')
  delete(): string {
    return 'This action deletes a song';
  }
}
