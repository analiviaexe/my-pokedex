import { Pokemon } from './pokemon.model';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  listaPokemon: Pokemon[] = [];
  pokemon = {} as Pokemon;
  private url: string = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.setAllPokemons();
  }

  setAllPokemons():Observable<Pokemon[]>{
    const limit = '?offset=0&limit=21';
    return this.http.get<any>(`${this.url + limit}`).pipe(
      tap( res => {
        res.results.map( (resPokemons: any) => {
          this.getPokemonStatus(resPokemons.url).subscribe(res => {
              let pokemon: Pokemon = {
                id: res.id,
                name: res.name,
                types: res.types,
                stats: res.stats,
                img: res.sprites.other.dream_world.front_default
              }
              this.listaPokemon.push(pokemon)
            }
          );
        })
      })
    )
  }

  getPokemonStatus( url: string ):Observable<any>{
    return this.http.get<any>(url).pipe( 
      map( res => res)
    )
  }

  set(): Observable<Pokemon[]>{
    const limit = '?offset=0&limit=21';
    this.http.get(`${this.url + limit}`).pipe(map(res1 => {
      this.getPokemonStatus(res1.url).subscribe
    }))
  }

}
