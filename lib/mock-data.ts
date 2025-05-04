// Mock data for Spotify clone

export type Track = {
  id: string;
  title: string;
  artists: string[];
  album: string;
  albumId: string;
  duration: number;
  coverUrl: string;
  audioUrl?: string;
};

export type Album = {
  id: string;
  title: string;
  artist: string;
  coverUrl: string;
  year: number;
  type: 'album' | 'single' | 'EP';
  tracks: Track[];
};

export type Playlist = {
  id: string;
  title: string;
  description: string;
  coverUrl: string;
  owner: string;
  tracks: Track[];
};

export type Artist = {
  id: string;
  name: string;
  imageUrl: string;
  genres: string[];
  monthlyListeners: number;
};

// Sample data

export const featuredPlaylists: Playlist[] = [
  {
    id: 'playlist-1',
    title: 'Today\'s Top Hits',
    description: 'The biggest hits right now.',
    coverUrl: 'https://images.pexels.com/photos/2261915/pexels-photo-2261915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    owner: 'Spotify',
    tracks: []
  },
  {
    id: 'playlist-2',
    title: 'RapCaviar',
    description: 'New music from Future, Polo G and Lil Uzi Vert.',
    coverUrl: 'https://images.pexels.com/photos/1460036/pexels-photo-1460036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    owner: 'Spotify',
    tracks: []
  },
  {
    id: 'playlist-3',
    title: 'All Out 2010s',
    description: 'The biggest songs of the 2010s.',
    coverUrl: 'https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    owner: 'Spotify',
    tracks: []
  },
  {
    id: 'playlist-4',
    title: 'Rock Classics',
    description: 'Rock legends & epic songs that continue to inspire generations.',
    coverUrl: 'https://images.pexels.com/photos/4406759/pexels-photo-4406759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    owner: 'Spotify',
    tracks: []
  },
  {
    id: 'playlist-5',
    title: 'Chill Hits',
    description: 'Kick back to the best chill hits.',
    coverUrl: 'https://images.pexels.com/photos/1876279/pexels-photo-1876279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    owner: 'Spotify',
    tracks: []
  },
  {
    id: 'playlist-6',
    title: 'Viva Latino',
    description: 'Today\'s top Latin hits.',
    coverUrl: 'https://images.pexels.com/photos/3324591/pexels-photo-3324591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    owner: 'Spotify',
    tracks: []
  }
];

export const newReleases: Album[] = [
  {
    id: 'album-1',
    title: 'Midnight Memories',
    artist: 'The Night Owls',
    coverUrl: 'https://images.pexels.com/photos/1666816/pexels-photo-1666816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    year: 2023,
    type: 'album',
    tracks: [
      {
        id: 'track-1',
        title: 'Midnight Dreams',
        artists: ['The Night Owls'],
        album: 'Midnight Memories',
        albumId: 'album-1',
        duration: 214,
        coverUrl: 'https://images.pexels.com/photos/1666816/pexels-photo-1666816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      },
      {
        id: 'track-2',
        title: 'City Lights',
        artists: ['The Night Owls'],
        album: 'Midnight Memories',
        albumId: 'album-1',
        duration: 183,
        coverUrl: 'https://images.pexels.com/photos/1666816/pexels-photo-1666816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      },
      {
        id: 'track-3',
        title: 'Urban Whispers',
        artists: ['The Night Owls'],
        album: 'Midnight Memories',
        albumId: 'album-1',
        duration: 197,
        coverUrl: 'https://images.pexels.com/photos/1666816/pexels-photo-1666816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      }
    ]
  },
  {
    id: 'album-2',
    title: 'Ocean Waves',
    artist: 'Coastal Dreams',
    coverUrl: 'https://images.pexels.com/photos/355288/pexels-photo-355288.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    year: 2023,
    type: 'album',
    tracks: [
      {
        id: 'track-4',
        title: 'Shoreline',
        artists: ['Coastal Dreams'],
        album: 'Ocean Waves',
        albumId: 'album-2',
        duration: 225,
        coverUrl: 'https://images.pexels.com/photos/355288/pexels-photo-355288.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      },
      {
        id: 'track-5',
        title: 'Tidal Forces',
        artists: ['Coastal Dreams'],
        album: 'Ocean Waves',
        albumId: 'album-2',
        duration: 193,
        coverUrl: 'https://images.pexels.com/photos/355288/pexels-photo-355288.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      }
    ]
  },
  {
    id: 'album-3',
    title: 'Neon Lights',
    artist: 'Electric Vision',
    coverUrl: 'https://images.pexels.com/photos/2111016/pexels-photo-2111016.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    year: 2023,
    type: 'album',
    tracks: [
      {
        id: 'track-6',
        title: 'Bright Nights',
        artists: ['Electric Vision'],
        album: 'Neon Lights',
        albumId: 'album-3',
        duration: 188,
        coverUrl: 'https://images.pexels.com/photos/2111016/pexels-photo-2111016.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      },
      {
        id: 'track-7',
        title: 'Downtown Glow',
        artists: ['Electric Vision'],
        album: 'Neon Lights',
        albumId: 'album-3',
        duration: 201,
        coverUrl: 'https://images.pexels.com/photos/2111016/pexels-photo-2111016.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      }
    ]
  },
  {
    id: 'album-4',
    title: 'Mountain High',
    artist: 'Alpine Echoes',
    coverUrl: 'https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    year: 2023,
    type: 'album',
    tracks: [
      {
        id: 'track-8',
        title: 'Summit',
        artists: ['Alpine Echoes'],
        album: 'Mountain High',
        albumId: 'album-4',
        duration: 235,
        coverUrl: 'https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      },
      {
        id: 'track-9',
        title: 'Valley View',
        artists: ['Alpine Echoes'],
        album: 'Mountain High',
        albumId: 'album-4',
        duration: 212,
        coverUrl: 'https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      }
    ]
  }
];

export const recentlyPlayed: Track[] = [
  {
    id: 'track-10',
    title: 'Dreaming Awake',
    artists: ['Luna Sleep'],
    album: 'Night Visions',
    albumId: 'album-5',
    duration: 205,
    coverUrl: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'track-11',
    title: 'Sunset Drive',
    artists: ['Coastal Highway'],
    album: 'Pacific Views',
    albumId: 'album-6',
    duration: 198,
    coverUrl: 'https://images.pexels.com/photos/3361739/pexels-photo-3361739.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'track-12',
    title: 'Urban Jungle',
    artists: ['City Dwellers'],
    album: 'Concrete Gardens',
    albumId: 'album-7',
    duration: 221,
    coverUrl: 'https://images.pexels.com/photos/681335/pexels-photo-681335.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'track-13',
    title: 'Winter Wonder',
    artists: ['Snow Patrol'],
    album: 'Frozen Memories',
    albumId: 'album-8',
    duration: 187,
    coverUrl: 'https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  }
];

export const popularArtists: Artist[] = [
  {
    id: 'artist-1',
    name: 'The Night Owls',
    imageUrl: 'https://images.pexels.com/photos/2456439/pexels-photo-2456439.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    genres: ['Indie Rock', 'Alternative'],
    monthlyListeners: 3500000
  },
  {
    id: 'artist-2',
    name: 'Coastal Dreams',
    imageUrl: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    genres: ['Chill', 'Electronic'],
    monthlyListeners: 2800000
  },
  {
    id: 'artist-3',
    name: 'Electric Vision',
    imageUrl: 'https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    genres: ['Synthwave', 'Electronic'],
    monthlyListeners: 1950000
  },
  {
    id: 'artist-4',
    name: 'Alpine Echoes',
    imageUrl: 'https://images.pexels.com/photos/2087717/pexels-photo-2087717.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    genres: ['Folk', 'Acoustic'],
    monthlyListeners: 1200000
  },
  {
    id: 'artist-5',
    name: 'Luna Sleep',
    imageUrl: 'https://images.pexels.com/photos/1321909/pexels-photo-1321909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    genres: ['Ambient', 'Chill'],
    monthlyListeners: 890000
  }
];

export const userPlaylists: Playlist[] = [
  {
    id: 'user-playlist-1',
    title: 'My Favorites',
    description: 'All my favorite songs',
    coverUrl: 'https://images.pexels.com/photos/6101028/pexels-photo-6101028.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    owner: 'You',
    tracks: []
  },
  {
    id: 'user-playlist-2',
    title: 'Workout Mix',
    description: 'Energetic songs for the gym',
    coverUrl: 'https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    owner: 'You',
    tracks: []
  },
  {
    id: 'user-playlist-3',
    title: 'Chill Vibes',
    description: 'Relaxing music for downtime',
    coverUrl: 'https://images.pexels.com/photos/2118046/pexels-photo-2118046.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    owner: 'You',
    tracks: []
  }
];

// Helper function to format duration
export function formatDuration(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}