import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PokemonDto } from '../models/pokemon.dto';

const URL = 'https://pokedex-api-swu8.onrender.com';
const BASE_PATH = '/pokemon';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) { }

  getAll(offset?: number, limit?: number) {
    let params = new HttpParams();

    if (offset !== undefined && limit !== undefined) {
      params = params.set("offset", offset).set("limit", limit);
    }
    return this.httpClient.get<PokemonDto[]>(URL + BASE_PATH, { params });
  }

  getById(id: string) {
    return this.httpClient.get<PokemonDto>(URL + BASE_PATH + "/" + id);
  }

}
