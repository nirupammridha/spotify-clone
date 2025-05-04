import { 
  featuredPlaylists, 
  newReleases, 
  recentlyPlayed, 
  popularArtists 
} from '@/lib/mock-data';
import { PlaylistCard } from '@/components/music/playlist-card';
import { AlbumCard } from '@/components/music/album-card';
import { ArtistCard } from '@/components/music/artist-card';
import { Greeting } from '@/components/ui/greeting';
import { TrackList } from '@/components/music/track-list';

export default function DashboardPage() {
  return (
    <div className="bg-gradient-to-b from-neutral-800 to-black pb-10">
      <div className="p-6">
        <Greeting />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-6">
          {recentlyPlayed.slice(0, 6).map((track) => (
            <a 
              key={track.id}
              href={`/album/${track.albumId}`}
              className="flex items-center bg-neutral-700/30 hover:bg-neutral-700/60 transition overflow-hidden h-16 rounded-md group"
            >
              <img 
                src={track.coverUrl}
                alt={track.title}
                className="h-16 w-16 object-cover"
              />
              <span className="font-medium px-4 truncate">{track.album}</span>
            </a>
          ))}
        </div>

        <section className="mt-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Featured Playlists</h2>
            <a href="/playlists" className="text-sm font-bold text-neutral-400 hover:underline">
              Show all
            </a>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
            {featuredPlaylists.slice(0, 6).map((playlist) => (
              <PlaylistCard 
                key={playlist.id} 
                playlist={playlist} 
              />
            ))}
          </div>
        </section>

        <section className="mt-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">New Releases</h2>
            <a href="/new-releases" className="text-sm font-bold text-neutral-400 hover:underline">
              Show all
            </a>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
            {newReleases.map((album) => (
              <AlbumCard 
                key={album.id} 
                album={album} 
              />
            ))}
          </div>
        </section>

        <section className="mt-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Popular Artists</h2>
            <a href="/artists" className="text-sm font-bold text-neutral-400 hover:underline">
              Show all
            </a>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
            {popularArtists.slice(0, 6).map((artist) => (
              <ArtistCard 
                key={artist.id} 
                artist={artist} 
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}