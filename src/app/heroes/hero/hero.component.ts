import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

export class HeroComponent {
  public name:string ='ironman';
  public age:number = 45;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeHero():void{
    this.name="spiderman";
  }

  changeAge():void{
    // this.age=Math.floor(Math.random() * (100 - 10 + 1)) + 10;
    this.age=20;
  }

}
