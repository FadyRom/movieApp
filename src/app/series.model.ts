export interface SEREIES_LIST_RESPONSE {
  adult: Boolean;
  backdrop_path: string;
  first_air_date: string;
  id: number;
  name: string;
  original_name: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}
export interface SELECTED_SERIES {
  adult: boolean;
  backdrop_path: string;
  created_by: [];
  episode_run_time: [];
  first_air_date: string;
  homepage: string;
  id: number;
  in_production: true;
  languages: ['en'];
  name: string;
  number_of_episodes: 672;
  number_of_seasons: 22;
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string;
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
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

export interface SEARCH_RESULTS {
  id: number;
  vote_average: number;
  media_type: string;
  name: string;
  backdrop_path: string;
  original_title: string;
  poster_path: string;
}
