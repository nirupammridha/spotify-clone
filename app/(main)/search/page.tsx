"use client";

import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { PlaylistCard } from '@/components/music/playlist-card';
import { AlbumCard } from '@/components/music/album-card';
import { ArtistCard } from '@/components/music/artist-card';
import { TrackList } from '@/components/music/track-list';
import { 
  featuredPlaylists, 
  newReleases, 
  popularArtists, 
  recentlyPlayed,
  Track
} from '@/lib/mock-data';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Combine all tracks from albums
  const allTracks: Track[] = [
    ...recentlyPlayed,
    ...newReleases.flatMap(album => album.tracks)
  ];
  
  // Filter content based on search query
  const filteredPlaylists = searchQuery 
    ? featuredPlaylists.filter(playlist => 
        playlist.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        playlist.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : featuredPlaylists;
    
  const filteredAlbums = searchQuery
    ? newReleases.filter(album =>
        album.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        album.artist.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : newReleases;
    
  const filteredArtists = searchQuery
    ? popularArtists.filter(artist =>
        artist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        artist.genres.some(genre => 
          genre.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    : popularArtists;
    
  const filteredTracks = searchQuery
    ? allTracks.filter(track =>
        track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        track.artists.some(artist => 
          artist.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        track.album.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];
  
  const hasResults = filteredPlaylists.length > 0 || 
    filteredAlbums.length > 0 || 
    filteredArtists.length > 0 || 
    filteredTracks.length > 0;
  
  return (
    <div className="bg-neutral-900 min-h-full pb-10">
      <div className="bg-neutral-800 sticky top-0 z-10 p-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-neutral-400" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="What do you want to listen to?"
            className="pl-10 bg-neutral-700 border-none placeholder:text-neutral-400 h-12 focus-visible:ring-green-500"
          />
        </div>
      </div>
      
      <div className="p-6">
        {!searchQuery ? (
          <>
            <h1 className="text-3xl font-bold mb-6">Browse all</h1>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
              {featuredPlaylists.map((playlist) => (
                <PlaylistCard 
                  key={playlist.id} 
                  playlist={playlist} 
                />
              ))}
            </div>
          </>
        ) : (
          <>
            {hasResults ? (
              <>
                {filteredTracks.length > 0 && (
                  <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Tracks</h2>
                    <TrackList 
                      tracks={filteredTracks.slice(0, 5)} 
                      showArtwork={true}
                    />
                    {filteredTracks.length > 5 && (
                      <button className="mt-4 text-neutral-400 hover:text-white font-bold text-sm">
                        See all tracks
                      </button>
                    )}
                  </section>
                )}
                
                {filteredArtists.length > 0 && (
                  <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Artists</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                      {filteredArtists.slice(0, 5).map((artist) => (
                        <ArtistCard 
                          key={artist.id} 
                          artist={artist} 
                        />
                      ))}
                    </div>
                  </section>
                )}
                
                {filteredAlbums.length > 0 && (
                  <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Albums</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                      {filteredAlbums.map((album) => (
                        <AlbumCard 
                          key={album.id} 
                          album={album} 
                        />
                      ))}
                    </div>
                  </section>
                )}
                
                {filteredPlaylists.length > 0 && (
                  <section>
                    <h2 className="text-2xl font-bold mb-4">Playlists</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                      {filteredPlaylists.map((playlist) => (
                        <PlaylistCard 
                          key={playlist.id} 
                          playlist={playlist} 
                        />
                      ))}
                    </div>
                  </section>
                )}
              </>
            ) : (
              <div className="text-center py-20">
                <p className="text-2xl font-bold mb-2">No results found for "{searchQuery}"</p>
                <p className="text-neutral-400">Please check your spelling or try different keywords.</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}