"use client";

import { cn } from '@/lib/utils';
import { Home, Search, Library, Plus, Heart, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { userPlaylists, featuredPlaylists } from '@/lib/mock-data';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();
  
  return (
    <div className={cn("flex flex-col h-full", className)}>
      <div className="space-y-1 py-2 px-3">
        <div className="flex items-center justify-between">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
              height="16"
              width="16"
              fill="#000000"
            >
              <path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z" />
            </svg>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="space-y-1 pt-2">
          <Link 
            href="/dashboard" 
            className={cn(
              "flex items-center gap-x-2 py-1 px-3 text-sm font-semibold rounded-md transition hover:text-white",
              pathname === "/dashboard" 
                ? "bg-neutral-800 text-white" 
                : "text-neutral-400 hover:bg-neutral-800"
            )}
          >
            <Home className="h-5 w-5" />
            <span>Home</span>
          </Link>
          <Link 
            href="/search" 
            className={cn(
              "flex items-center gap-x-2 py-1 px-3 text-sm font-semibold rounded-md transition hover:text-white",
              pathname === "/search" 
                ? "bg-neutral-800 text-white" 
                : "text-neutral-400 hover:bg-neutral-800"
            )}
          >
            <Search className="h-5 w-5" />
            <span>Search</span>
          </Link>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-3 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2 py-1 px-3 text-sm font-semibold text-neutral-400 hover:text-white transition">
            <Library className="h-5 w-5" />
            <span>Your Library</span>
          </div>
          <div className="flex items-center gap-x-1">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-neutral-400 hover:text-white">
              <Plus className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-neutral-400 hover:text-white">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex gap-x-2 mt-2">
          <Button variant="secondary" className="rounded-full text-xs py-1 h-auto bg-neutral-800 text-white hover:bg-neutral-700">
            Playlists
          </Button>
          <Button variant="secondary" className="rounded-full text-xs py-1 h-auto bg-neutral-800 text-white hover:bg-neutral-700">
            Artists
          </Button>
          <Button variant="secondary" className="rounded-full text-xs py-1 h-auto bg-neutral-800 text-white hover:bg-neutral-700">
            Albums
          </Button>
        </div>

        <div className="mt-2">
          <Button variant="ghost" size="icon" className="h-8 w-8 text-neutral-400 hover:text-white">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="ghost" className="text-xs text-neutral-400 hover:text-white px-1 py-0">
            Recents <ChevronRight className="h-3 w-3 inline" />
          </Button>
        </div>

        <ScrollArea className="h-[calc(100%-120px)] pr-2">
          <div className="space-y-2 mt-2 pb-2">
            <div className="flex items-center gap-2 p-2 rounded-md hover:bg-neutral-800 transition">
              <div className="bg-gradient-to-br from-purple-700 to-pink-500 rounded-md h-12 w-12 flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="text-sm font-medium truncate">Liked Songs</span>
                <span className="text-xs text-neutral-400 truncate">Playlist • 125 songs</span>
              </div>
            </div>
          
            {userPlaylists.map((playlist) => (
              <Link 
                key={playlist.id}
                href={`/playlist/${playlist.id}`}
                className="flex items-center gap-2 p-2 rounded-md hover:bg-neutral-800 transition"
              >
                <img 
                  src={playlist.coverUrl} 
                  alt={playlist.title} 
                  className="h-12 w-12 rounded-md object-cover"
                />
                <div className="flex flex-col overflow-hidden">
                  <span className="text-sm font-medium truncate">{playlist.title}</span>
                  <span className="text-xs text-neutral-400 truncate">
                    Playlist • {playlist.owner}
                  </span>
                </div>
              </Link>
            ))}
            
            {featuredPlaylists && featuredPlaylists.slice(0, 4).map((playlist) => (
              <Link 
                key={playlist.id}
                href={`/playlist/${playlist.id}`}
                className="flex items-center gap-2 p-2 rounded-md hover:bg-neutral-800 transition"
              >
                <img 
                  src={playlist.coverUrl} 
                  alt={playlist.title} 
                  className="h-12 w-12 rounded-md object-cover"
                />
                <div className="flex flex-col overflow-hidden">
                  <span className="text-sm font-medium truncate">{playlist.title}</span>
                  <span className="text-xs text-neutral-400 truncate">
                    Playlist • {playlist.owner}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </ScrollArea>
      </div>

      <div className="mt-auto p-3">
        <Button variant="ghost" className="w-full justify-start pl-3 text-neutral-400 hover:text-white font-normal text-sm">
          <Download className="h-4 w-4 mr-2" />
          Install App
        </Button>
      </div>
    </div>
  );
}