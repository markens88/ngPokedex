import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../common.service';
import { TitleCasePipe } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail',
  imports: [TitleCasePipe],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {

  private readonly route = inject(ActivatedRoute);
  private readonly location = inject(Location);
  private service = inject(CommonService);
  private connection: any;
  public pokemon: any; 
  public dataLoaded = false;

  ngOnInit(): void {
    const pokemonName = this.route.snapshot.paramMap.get('name');
    this.connection = pokemonName && this.service.getPokemonData(pokemonName).subscribe( {
      next: data => {
        this.pokemon = data;
        this.dataLoaded = true;
        console.log(this.pokemon);
      },
      error: err => {
        console.error('Error al obtener datos del Pokémon:', err);
      }
    });
  }

  ngOnDestroy(): void {
    this.connection.unsubscribe();
  }

  public getPokeNum(num: number): string {
    return this.service.getPokeNum(num);
  }

  public handleBack(): void {
    console.log('Back button clicked');
    this.location.back();
  }

}
