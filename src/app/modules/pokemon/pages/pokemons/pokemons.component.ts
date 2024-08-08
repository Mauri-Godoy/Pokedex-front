import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../../../services/pokemon.service';
import { PokemonDto } from 'src/app/models/pokemon.dto';
import { LoadingService } from '../../../../services/loading.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html'
})
export class PokemonsComponent implements OnInit {

  constructor(private pokemonService: PokemonService, private loadingService: LoadingService) { }

  data: PokemonDto[] = [];
  offset: number = 0;
  limit: number = 10;

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.loadingService.showLoader()
    this.pokemonService.getAll(this.offset, this.limit).subscribe({
      next: res => {
        this.data = res;
      },
      error: err => {
        console.error(err);
        this.loadingService.hideLoader()
      },
      complete: () => {
        this.loadingService.hideLoader()
      }
    });
  }

  nextPage() {
    this.offset += this.limit;
    this.getData()
  }

  previousPage() {
    this.offset -= this.limit;
    this.getData()
  }
}
