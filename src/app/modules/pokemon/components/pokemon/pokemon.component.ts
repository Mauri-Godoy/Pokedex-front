import { Component, Input, OnInit } from '@angular/core';
import { PokemonDto } from 'src/app/models/pokemon.dto';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html'
})
export class PokemonComponent {

  @Input() pokemon!: PokemonDto

  get types() {
    return this.pokemon.types?.join(' - ');
  }

  get abilities() {
    return this.pokemon.abilities?.join(' - ');
  }

  get weight() {
    return (this.pokemon?.weight || 0) / 10 + 'kg';
  }

  get height() {
    return (this.pokemon?.height || 0) / 10 + 'm';
  }
}
