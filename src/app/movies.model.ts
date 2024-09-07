export interface MOVIE_API_SHAPE {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
  // video: boolean;
}

export interface CREW {
  adult: boolean;
  job: string;
  known_for_department: string;
  name: string;
  profile_path: string;
}

export interface CAST {
  adult: boolean;
  character: string;

  known_for_department: string;
  name: string;

  profile_path: string;
}

export interface REVIEWS_RESULTS {
  author: string;
  author_details: {
    name: string;
    username: string;
    avatar_path: string;
    rating: number;
  };
  content: string;
}

export interface REVIEWS {
  id: number;
  page: number;
  results: REVIEWS_RESULTS[];
  total_pages: number;
  total_results: number;
}

export interface RECOMMENDED_RESULTS {
  backdrop_path: string;
  id: number;
  media_type: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
}
