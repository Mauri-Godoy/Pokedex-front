import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonDto } from '../models/pokemon.dto';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<PokemonDto[]>("http://localhost:8080/");
  }
}
