export class PokemonDto {
  name?: string;
  url?: string;
  id?: number;
  sprites?: Sprites;
  weight?: number;
  height?: number;
  types?: TypeContainer[];
  abilities?: AbilityContainer[];
  moves?: MovesContainer[];
  description?: string;
}
class Sprites {
  front_default?: string;
}

class TypeContainer {
  type?: Type;
}

class Type {
  name?: string;
}

class AbilityContainer {
  ability?: Ability;
}

class Ability {
  name?: string;
}

class MovesContainer {
  move?: Move;
}

class Move {
  name?: string;
}
