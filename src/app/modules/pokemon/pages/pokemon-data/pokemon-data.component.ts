import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonDto } from 'src/app/models/pokemon.dto';
import { LoadingService } from 'src/app/services/loading.service';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-data',
  templateUrl: './pokemon-data.component.html'
})
export class PokemonDataComponent implements OnInit {

  constructor(private pokemonService: PokemonService,
    private route: ActivatedRoute,
    private loadingService: LoadingService,
    private router: Router) { }

  pokemon!: PokemonDto;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.getById(params.get('id'))
    });
  }

  getById(id: string | null) {
    if (id) {
      this.loadingService.showLoader()
      this.pokemonService.getById(id)
        .subscribe({
          next: pokemon =>
            this.pokemon = pokemon,
          error: () => this.loadingService.hideLoader(),
          complete: () => this.loadingService.hideLoader()
        });
    }
  }

  previous(): void {
    const previousId = (this.pokemon.id ?? 0) - 1;
    this.router.navigate(['pokemon', previousId]);
  }

  home(): void {
    this.router.navigate(['pokemon']);
  }

  next(): void {
    const nextId = (this.pokemon.id ?? 0) + 1;
    this.router.navigate(['pokemon', nextId]);
  }
  get types() {
    return this.pokemon.types?.join(' - ');
  }

  get weight() {
    return (this.pokemon?.weight || 0) / 10 + 'kg';
  }

  get height() {
    return (this.pokemon?.height || 0) / 10 + 'm';
  }
}
