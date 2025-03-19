import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel,IonCol, IonList, IonCard,IonRow, IonGrid, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { SimplePokemon } from '../interface/pokemon.interface';
import { PokemonService } from '../services/pokemon.service';
import { PokemonDetails } from '../interface/pokemon.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,IonCol, IonItem, IonRow,IonGrid, IonLabel, IonList, CommonModule, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle], 
})
export class Tab1Page implements OnInit {
  pokemonList: PokemonDetails[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.loadPokemonList();
  }

  loadPokemonList() {
    this.pokemonService.getPokemonList().subscribe((pokemon) => {
      this.pokemonList = pokemon;
    });
  }
}

