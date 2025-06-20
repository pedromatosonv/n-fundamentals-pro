import { Body, Controller, Post } from '@nestjs/common';
import { Playlist } from './playlist.entity';
import { CreatePlaylistDTO } from './dto/create-playlist.dto';
import { PlaylistsService } from './playlists.service';

@Controller('playlists')
export class PlaylistsController {
  constructor(private playlistsService: PlaylistsService) {}

  @Post()
  async create(@Body() input: CreatePlaylistDTO): Promise<Playlist> {
    return await this.playlistsService.create(input);
  }
}
