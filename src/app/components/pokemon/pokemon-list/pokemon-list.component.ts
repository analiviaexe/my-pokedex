import { Observable } from 'rxjs';
import { PokemonService } from './../../pokemon.service';
import { Pokemon } from '../../pokemon.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons: Pokemon[];
  pokemon: Pokemon;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getAllPokemons();
  }

  getAllPokemons(): void{
    this.pokemonService.getAllPokemons().subscribe(pokemons => {
      this.pokemons = pokemons.results;
      console.log(this.pokemons);
    })
  }
}
