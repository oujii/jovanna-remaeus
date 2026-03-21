export interface Project {
  id: number;
  title: string;
  titleLines: string[];
  type: string;
  director: string;
  production: string;
  year: number;
  format: string;
  videoSrc: string;
  thumbnail: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Tears of Steel",
    titleLines: ["Tears of", "Steel"],
    type: "Featured Work",
    director: "Ian Hubert",
    production: "Blender Foundation",
    year: 2012,
    format: "Short Film",
    videoSrc: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    thumbnail: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=60&w=160&fit=crop",
  },
  {
    id: 2,
    title: "Elephant's Dream",
    titleLines: ["Elephant's", "Dream"],
    type: "Short Film",
    director: "Bassam Kurdali",
    production: "Blender Foundation",
    year: 2006,
    format: "Short Film",
    videoSrc: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=60&w=160&fit=crop",
  },
  {
    id: 3,
    title: "Sintel",
    titleLines: ["Sintel"],
    type: "Short Film",
    director: "Colin Levy",
    production: "Blender Foundation",
    year: 2010,
    format: "Short Film",
    videoSrc: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    thumbnail: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?q=60&w=160&fit=crop",
  },
  {
    id: 4,
    title: "Dead Shot",
    titleLines: ["Dead", "Shot"],
    type: "Commercial",
    director: "Guard Brothers",
    production: "Piecrust Productions",
    year: 2023,
    format: "Commercial",
    videoSrc: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    thumbnail: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?q=60&w=160&fit=crop",
  },
  {
    id: 5,
    title: "Astra's Voyage",
    titleLines: ["Astra's", "Voyage"],
    type: "Feature Film",
    director: "M. Jensen",
    production: "Cosmos Films",
    year: 2024,
    format: "Feature Film",
    videoSrc: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=60&w=160&fit=crop",
  },
  {
    id: 6,
    title: "The Weight",
    titleLines: ["The", "Weight"],
    type: "Short Film",
    director: "A. Morrison",
    production: "Stillframe",
    year: 2022,
    format: "Short Film",
    videoSrc: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=60&w=160&fit=crop",
  },
];
