import { Pokemon } from './pokemon.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url: string = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) { }

  getAllPokemons():Observable<any>{
    const limit = '?offset=0&limit=20';
    return this.http.get<any>(`${this.url + limit}`).pipe(
      tap( res => res ),
      tap( res => {
        res.results.map( (resPokemons: any) => {
          this.getPokemonStatus(resPokemons.url).subscribe(
            res => resPokemons.status = res
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
}
