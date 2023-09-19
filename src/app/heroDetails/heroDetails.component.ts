import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-hero';

@Component({
  selector: 'app-heroDetails',
  templateUrl: './heroDetails.component.html',
  styleUrls: ['./heroDetails.component.css']
})

export class HeroDetailsComponent {
  heroes = HEROES

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}
