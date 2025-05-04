import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { Play } from 'lucide-react';
import { Artist } from '@/lib/mock-data';

interface ArtistCardProps {
  artist: Artist;
  className?: string;
}

export function ArtistCard({ artist, className }: ArtistCardProps) {
  return (
    <Link
      href={`/artist/${artist.id}`}
      className={cn(
        "group relative bg-neutral-800/50 rounded-md p-4 hover:bg-neutral-800 transition overflow-hidden",
        className
      )}
    >
      <div className="aspect-square w-full relative mb-4 rounded-full overflow-hidden">
        <img
          src={artist.imageUrl}
          alt={artist.name}
          className="object-cover w-full h-full transition"
        />
        <button 
          className="absolute right-2 bottom-2 rounded-full bg-green-500 p-3 shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300"
        >
          <Play className="h-5 w-5 text-black" fill="black" />
        </button>
      </div>
      <div>
        <h3 className="font-semibold truncate">{artist.name}</h3>
        <p className="text-sm text-neutral-400 mt-1">
          Artist
        </p>
      </div>
    </Link>
  );
}