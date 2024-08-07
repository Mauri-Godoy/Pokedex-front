import { Component, Input, OnInit } from '@angular/core';
import { PokemonDto } from 'src/app/models/pokemon.dto';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html'
})
export class PokemonComponent {

  @Input() pokemon!: PokemonDto

}
