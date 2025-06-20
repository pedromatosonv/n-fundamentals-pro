import { In, Repository } from 'typeorm';
import { CreatePlaylistDTO } from './dto/create-playlist.dto';
import { Song } from 'src/songs/entities/song.entity';
import { Playlist } from './playlist.entity';
import { User } from 'src/users/user.entity';

export class PlaylistsService {
  constructor(
    private playlistsRepository: Repository<Playlist>,
    private songsRepository: Repository<Song>,
    private usersRepository: Repository<User>,
  ) {}

  async create(input: CreatePlaylistDTO): Promise<Playlist> {
    const playlist = new Playlist();
    const user = await this.usersRepository.findOneBy({ id: input.userId });
    if (!user) {
      throw new Error('User not found');
    }
    const songs = await this.songsRepository.findBy({ id: In(input.songIds) });
    playlist.title = input.title;
    playlist.songs = songs;
    playlist.user = user;
    return await this.playlistsRepository.save(playlist);
  }
}
