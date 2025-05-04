"use client";

import { useState } from 'react';
import { Track, formatDuration } from '@/lib/mock-data';
import { cn } from '@/lib/utils';
import { Play, Pause, Heart, MoreHorizontal, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TrackListProps {
  tracks: Track[];
  showHeader?: boolean;
  showAlbum?: boolean;
  showArtwork?: boolean;
  className?: string;
}

export function TrackList({ 
  tracks, 
  showHeader = true, 
  showAlbum = true,
  showArtwork = false,
  className 
}: TrackListProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [likedTracks, setLikedTracks] = useState<Set<string>>(new Set());
  
  const togglePlay = (index: number) => {
    if (playingIndex === index) {
      setPlayingIndex(null);
    } else {
      setPlayingIndex(index);
    }
  };
  
  const toggleLike = (trackId: string) => {
    const newLikedTracks = new Set(likedTracks);
    if (newLikedTracks.has(trackId)) {
      newLikedTracks.delete(trackId);
    } else {
      newLikedTracks.add(trackId);
    }
    setLikedTracks(newLikedTracks);
  };

  return (
    <div className={cn("w-full", className)}>
      {showHeader && (
        <div className="grid grid-cols-[16px_4fr_2fr_minmax(120px,1fr)] text-neutral-400 text-sm px-4 py-2 border-b border-neutral-800 font-medium">
          <div className="text-center">#</div>
          <div>Title</div>
          {showAlbum && <div>Album</div>}
          <div className="flex justify-end">
            <Clock className="h-4 w-4" />
          </div>
        </div>
      )}
      
      <div className="text-sm">
        {tracks.map((track, index) => (
          <div 
            key={track.id}
            className={cn(
              "grid grid-cols-[16px_4fr_2fr_minmax(120px,1fr)] px-4 py-2 rounded-md gap-4 group",
              {
                "bg-white/10": hoveredIndex === index || playingIndex === index,
                "hover:bg-white/10": hoveredIndex !== index
              }
            )}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex items-center justify-center">
              {hoveredIndex === index ? (
                <button
                  onClick={() => togglePlay(index)}
                  className="h-4 w-4 flex items-center justify-center"
                >
                  {playingIndex === index ? (
                    <Pause className="h-4 w-4 text-white" />
                  ) : (
                    <Play className="h-4 w-4 text-white" />
                  )}
                </button>
              ) : playingIndex === index ? (
                <Pause className="h-4 w-4 text-green-500" />
              ) : (
                <span className="text-neutral-400 text-center">{index + 1}</span>
              )}
            </div>
            
            <div className="flex items-center gap-3 overflow-hidden">
              {showArtwork && (
                <img 
                  src={track.coverUrl} 
                  alt={track.title}
                  className="h-10 w-10 rounded"
                />
              )}
              <div className="min-w-0">
                <div className={cn(
                  "font-medium truncate",
                  playingIndex === index && "text-green-500"
                )}>
                  {track.title}
                </div>
                <div className="text-neutral-400 truncate">
                  {track.artists.join(", ")}
                </div>
              </div>
            </div>
            
            {showAlbum && (
              <div className="flex items-center text-neutral-400 truncate">
                {track.album}
              </div>
            )}
            
            <div className="flex items-center gap-x-3 justify-end">
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "h-8 w-8 opacity-0 group-hover:opacity-100 transition",
                  likedTracks.has(track.id) && "opacity-100 text-green-500"
                )}
                onClick={() => toggleLike(track.id)}
              >
                <Heart 
                  className="h-4 w-4" 
                  fill={likedTracks.has(track.id) ? "currentColor" : "none"} 
                />
              </Button>
              
              <div className="text-neutral-400">
                {formatDuration(track.duration)}
              </div>
              
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 opacity-0 group-hover:opacity-100 transition"
              >
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}