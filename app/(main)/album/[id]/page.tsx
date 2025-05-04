"use client";

import { useEffect, useState } from 'react';
import { Clock, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TrackList } from '@/components/music/track-list';
import { Album, newReleases } from '@/lib/mock-data';

export default function AlbumPage({ params }: { params: { id: string } }) {
  const [album, setAlbum] = useState<Album | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API fetch
    const fetchAlbum = () => {
      setIsLoading(true);
      setTimeout(() => {
        const foundAlbum = newReleases.find(album => album.id === params.id);
        setAlbum(foundAlbum || null);
        setIsLoading(false);
      }, 500);
    };
    
    fetchAlbum();
  }, [params.id]);
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-full">
        <div className="w-8 h-8 border-t-2 border-green-500 rounded-full animate-spin"></div>
      </div>
    );
  }
  
  if (!album) {
    return (
      <div className="flex items-center justify-center min-h-full">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Album not found</h1>
          <p className="text-neutral-400">The album you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }
  
  const totalDuration = album.tracks.reduce((total, track) => total + track.duration, 0);
  const minutes = Math.floor(totalDuration / 60);
  
  return (
    <div>
      <div className="relative h-[40vh] min-h-[300px]">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-900"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.8)), url(${album.coverUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
          }}
        />
        
        <div className="absolute bottom-0 left-0 p-6 flex items-end gap-6">
          <img
            src={album.coverUrl}
            alt={album.title}
            className="h-48 w-48 shadow-lg"
          />
          
          <div className="flex flex-col justify-end">
            <span className="text-sm font-medium">Album</span>
            <h1 className="text-5xl font-bold mt-2 mb-4">{album.title}</h1>
            <div className="flex items-center gap-1 text-sm">
              <span className="font-semibold">{album.artist}</span>
              <span className="mx-1">•</span>
              <span>{album.year}</span>
              <span className="mx-1">•</span>
              <span>{album.tracks.length} songs,</span>
              <span className="text-neutral-400">{minutes} min</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-b from-neutral-900/90 to-neutral-900 p-6">
        <div className="flex items-center gap-6 mb-6">
          <Button className="rounded-full h-14 w-14 bg-green-500 hover:bg-green-400 text-black hover:scale-105 transition">
            <Play className="h-7 w-7 ml-1" fill="black" />
          </Button>
        </div>
        
        <TrackList tracks={album.tracks} showAlbum={false} />
        
        <div className="mt-8 text-neutral-400 text-sm">
          <p className="mb-1">
            {album.year} • {album.tracks.length} songs, {minutes} min
          </p>
          <p className="mt-4">© 2023 {album.artist}</p>
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">More by {album.artist}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {newReleases.slice(0, 6).map((otherAlbum) => (
              <a
                key={otherAlbum.id}
                href={`/album/${otherAlbum.id}`}
                className="group bg-neutral-800/50 p-4 rounded-md hover:bg-neutral-800 transition"
              >
                <div className="aspect-square w-full mb-4 rounded overflow-hidden">
                  <img
                    src={otherAlbum.coverUrl}
                    alt={otherAlbum.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-medium truncate">{otherAlbum.title}</h3>
                <p className="text-sm text-neutral-400">{otherAlbum.year}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}