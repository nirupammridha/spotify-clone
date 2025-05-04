"use client";

import { useState } from 'react';
import { 
  Play, Pause, SkipBack, SkipForward, 
  Volume2, Volume1, VolumeX, 
  Repeat, Shuffle, Mic2, ListMusic, 
  Laptop, Maximize2, Heart 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { formatDuration } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

interface PlayerProps {
  className?: string;
}

export function Player({ className }: PlayerProps) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number[]>([70]);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  
  const duration = 214; // seconds
  
  const currentTrack = {
    title: "Midnight Dreams",
    artist: "The Night Owls",
    albumCover: "https://images.pexels.com/photos/1666816/pexels-photo-1666816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  };
  
  const togglePlay = () => setIsPlaying(!isPlaying);
  const toggleLike = () => setIsLiked(!isLiked);
  
  const handleProgressChange = (value: number[]) => {
    setCurrentTime(value[0]);
  };
  
  const getVolumeIcon = () => {
    if (volume[0] === 0) return <VolumeX />;
    if (volume[0] < 50) return <Volume1 />;
    return <Volume2 />;
  };
  
  return (
    <div className={cn("bg-black border-t border-neutral-800 p-2 md:px-4", className)}>
      <div className="flex items-center justify-between">
        {/* Current track info */}
        <div className="flex items-center gap-x-3 w-1/4 min-w-[180px]">
          <img 
            src={currentTrack.albumCover} 
            alt={currentTrack.title} 
            className="hidden sm:block h-14 w-14 rounded"
          />
          <div className="flex flex-col">
            <span className="text-sm font-medium truncate">{currentTrack.title}</span>
            <span className="text-xs text-neutral-400 truncate">{currentTrack.artist}</span>
          </div>
          <Button 
            onClick={toggleLike}
            variant="ghost" 
            size="icon" 
            className={cn(
              "hidden sm:flex h-8 w-8", 
              isLiked ? "text-green-500" : "text-neutral-400 hover:text-white"
            )}
          >
            <Heart className="h-4 w-4" fill={isLiked ? "currentColor" : "none"} />
          </Button>
        </div>
        
        {/* Player controls */}
        <div className="flex flex-col items-center max-w-[45%] w-1/2">
          <div className="flex items-center gap-x-2 md:gap-x-4">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-neutral-400 hover:text-white">
              <Shuffle className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-neutral-400 hover:text-white">
              <SkipBack className="h-4 w-4" />
            </Button>
            <Button 
              onClick={togglePlay}
              variant="default" 
              size="icon" 
              className="h-8 w-8 rounded-full bg-white hover:bg-white text-black hover:scale-105 transition"
            >
              {isPlaying ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4 ml-0.5" />
              )}
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-neutral-400 hover:text-white">
              <SkipForward className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-neutral-400 hover:text-white">
              <Repeat className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex items-center gap-x-2 w-full pt-1">
            <span className="text-xs text-neutral-400 w-8 text-right">
              {formatDuration(currentTime)}
            </span>
            <Slider
              value={[currentTime]}
              min={0}
              max={duration}
              step={1}
              onValueChange={handleProgressChange}
              className="w-full cursor-pointer"
            />
            <span className="text-xs text-neutral-400 w-8">
              {formatDuration(duration)}
            </span>
          </div>
        </div>
        
        {/* Additional controls */}
        <div className="flex items-center gap-x-2 justify-end w-1/4 min-w-[180px]">
          <Button variant="ghost" size="icon" className="hidden md:flex h-8 w-8 text-neutral-400 hover:text-white">
            <Mic2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden md:flex h-8 w-8 text-neutral-400 hover:text-white">
            <ListMusic className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden md:flex h-8 w-8 text-neutral-400 hover:text-white">
            <Laptop className="h-4 w-4" />
          </Button>
          
          <div className="flex items-center gap-x-2">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-neutral-400 hover:text-white">
              {getVolumeIcon()}
            </Button>
            <Slider
              value={volume}
              min={0}
              max={100}
              step={1}
              onValueChange={(value) => setVolume(value)}
              className="w-20 md:w-24 cursor-pointer"
            />
          </div>
          
          <Button variant="ghost" size="icon" className="hidden md:flex h-8 w-8 text-neutral-400 hover:text-white">
            <Maximize2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}