export interface Movie {
  id: string;
  title: string;
  image: string;
  videoUrl: string;
  description: string;
  genre: string[];
  trending: boolean;
  isPopular: boolean;
  type: 'movie' | 'tv';
  category: 'Trending' | 'Action' | 'Horror' | 'Sci-Fi';
}

export const MOVIES: Movie[] = [
  {
    id: '1',
    title: 'Interstellar',
    image: 'https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/aa5b9295-8f9c-44f5-809b-3f2b84badfbf/8a7dd34b09c9c25336a3d850d4c431455e1aaaf0.jpg?host=wbd-images.prod-vod.h264.io&partner=beamcom',
    videoUrl: 'https://drive.google.com/file/d/1rjx6-12dB11LWwj5jFEFX2QMuZiEVUFk/view?t=5',
    description: 'When our time on Earth is coming to an end, a team of explorers undertakes the most important mission in human history.',
    genre: ['Sci-Fi', 'Drama', 'Adventure'],
    trending: true,
    isPopular: true,
    type: 'movie',
    category: 'Sci-Fi'
  },
  {
    id: '2',
    title: 'The Dark Knight',
    image: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDp9QmSbmrQvC2q7EkQ.jpg',
    videoUrl: 'https://drive.google.com/file/d/dark_knight_drive_id/view',
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    genre: ['Action', 'Crime', 'Drama'],
    trending: true,
    isPopular: true,
    type: 'movie',
    category: 'Action'
  },
  {
    id: '3',
    title: 'Inception',
    image: 'https://image.tmdb.org/t/p/w500/edv5CZvnc0DE9YezOxd67miV4ec.jpg',
    videoUrl: 'https://drive.google.com/file/d/inception_drive_id/view',
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    genre: ['Action', 'Sci-Fi', 'Adventure'],
    trending: true,
    isPopular: false,
    type: 'movie',
    category: 'Sci-Fi'
  },
  {
    id: '4',
    title: 'John Wick',
    image: 'https://image.tmdb.org/t/p/w500/fZPSnR9TmYv9Z1zS2sPRvC7vO3Z.jpg',
    videoUrl: 'https://drive.google.com/file/d/john_wick_drive_id/view',
    description: 'An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.',
    genre: ['Action', 'Thriller'],
    trending: false,
    isPopular: true,
    type: 'movie',
    category: 'Action'
  },
  {
    id: '5',
    title: 'Extraction',
    image: 'https://image.tmdb.org/t/p/w500/w9qPqLv7WfD6I0u7QfBAnvU2Sna.jpg',
    videoUrl: 'https://drive.google.com/file/d/extraction_drive_id/view',
    description: 'Tyler Rake, a fearless black market mercenary, embarks on the most deadly extraction of his career.',
    genre: ['Action', 'Thriller'],
    trending: true,
    isPopular: true,
    type: 'movie',
    category: 'Action'
  },
  {
    id: '6',
    title: 'Stranger Things',
    image: 'https://image.tmdb.org/t/p/w500/x2LSRm21uTExS0UuS6Ni9pX9S9.jpg',
    videoUrl: '#',
    description: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.',
    genre: ['Sci-Fi', 'Drama', 'Horror'],
    trending: true,
    isPopular: true,
    type: 'tv',
    category: 'Sci-Fi'
  },
  {
    id: '7',
    title: 'The Boys',
    image: 'https://image.tmdb.org/t/p/w500/mY7pS7owm9vRwznCOS613FF6FaO.jpg',
    videoUrl: '#',
    description: 'A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.',
    genre: ['Action', 'Sci-Fi', 'Drama'],
    trending: true,
    isPopular: true,
    type: 'tv',
    category: 'Action'
  },
  {
    id: '8',
    title: 'The Conjuring',
    image: 'https://image.tmdb.org/t/p/w500/7Inid9v7mSKbvZ4SiiCD87Y898v.jpg',
    videoUrl: 'https://drive.google.com/file/d/conjuring_drive_id/view',
    description: 'Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.',
    genre: ['Horror', 'Mystery', 'Thriller'],
    trending: false,
    isPopular: false,
    type: 'movie',
    category: 'Horror'
  }
];
