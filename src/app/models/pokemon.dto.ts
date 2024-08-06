export class PokemonDto {
  name?: string;
  url?: string;
  id?: number;
  sprites?: Sprites;
}

class Sprites {
  front_default?: string;
}
