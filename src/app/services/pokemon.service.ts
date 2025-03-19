import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { construct } from 'ionicons/icons';
import { map, switchMap } from 'rxjs/operators';
import { forkJoin, Observable } from 'rxjs';
import { PokemonDetails, PokemonListResponse } from "../interface/pokemon.interface";
@Injectable({
    providedIn: 'root'
})
export class PokemonService {
  private apiURL = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  // Obtener lista de Pokémon
  getPokemonList(limit: number = 20): Observable<PokemonDetails[]> {
    return this.http.get<PokemonListResponse>(`${this.apiURL}?limit=${limit}`).pipe(
      switchMap(response => {
        const requests = response.results.map(pokemon => this.getPokemonDetails(pokemon.url));
        return forkJoin(requests); // Esperamos todas las peticiones
      })
    );
  }

  // Obtener detalles de cada Pokémon
  getPokemonDetails(url: string): Observable<PokemonDetails> {
    return this.http.get<PokemonDetails>(url).pipe(
      map(data => ({
        name: data.name,
        height: data.height,
        weight: data.weight,
        sprites: { front_default: data.sprites.front_default },
        types: data.types
      }))
    );
  }
}
