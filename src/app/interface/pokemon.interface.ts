export interface PokemonListResponse {
  count: number;
  next: string;
  previous: string;
  results: SimplePokemon[];
}

export interface SimplePokemon {
  name: string;
  url: string;
}

export interface PokemonDetails {
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
  types: { type: { name: string } }[]; 
}


