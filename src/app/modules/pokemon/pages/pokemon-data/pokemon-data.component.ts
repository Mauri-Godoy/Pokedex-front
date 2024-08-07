import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonDto } from 'src/app/models/pokemon.dto';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-data',
  templateUrl: './pokemon-data.component.html'
})
export class PokemonDataComponent implements OnInit {

  constructor(private pokemonService: PokemonService,
    private route: ActivatedRoute) { }

  pokemon!: PokemonDto;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.getById(params.get('id'))
    });
  }

  getById(id: string | null) {
    if (id)
      this.pokemonService.getById(id)
        .subscribe((pokemon: PokemonDto) => {
          this.pokemon = pokemon;
        });
  }

}
