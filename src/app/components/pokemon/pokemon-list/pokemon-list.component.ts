import { Observable } from 'rxjs';
import { Pokemon } from '../pokemon.model';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons: Pokemon[];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getAllPokemons();
  }

  getAllPokemons(): void{
    this.pokemonService.setAllPokemons().subscribe(() => {
      this.pokemons = this.pokemonService.listaPokemon;
      this.pokemons = this.sortingPokemons(this.pokemons);
      console.log(this.pokemons);
    })
  }

  sortingPokemons(pokemons: Pokemon[]): Pokemon[]{
    return pokemons.sort((a, b) => {
      return b.id - a.id;
    });
  }
}
