import { Component, inject } from '@angular/core';
import { CommonService } from '../common.service';
import { PokemonEntry } from '../types';
import { TitleCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [TitleCasePipe, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  private httpService: CommonService = inject(CommonService);
  private connection: any;
  pokemonList: PokemonEntry[] = [];

  ngOnInit(): void{
    this.connection = this.httpService.getPokedexData().subscribe(data => {
      this.pokemonList = data.results; 
    })
  }

  ngOnDestroy(): void {
    this.connection.unsubscribe();
  }

  public getPokeNum(num: number): string {
    return this.httpService.getPokeNum(num);
  }
}
