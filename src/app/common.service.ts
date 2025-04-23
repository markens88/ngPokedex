import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private http = inject(HttpClient);

  constructor() { }

  getPokedexData(): Observable<any> {
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=151');
  }

  getPokemonData(name: string): Observable<any> {
    console.log('https://pokeapi.co/api/v2/pokemon/'+name);
    return this.http.get('https://pokeapi.co/api/v2/pokemon/'+name);
  } 

  getPokeNum(num: number): string {
    if (num < 10) {
      return '#00' + num;
    } else if (num < 100) {
      return '#0' + num;
    } else {
      return '#'+num;
    }
  }
}
