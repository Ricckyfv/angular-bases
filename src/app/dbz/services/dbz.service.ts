import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

console.log(uuid())

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters:Character[] = [
    {
      id: uuid(),
      name:"Krillin",
      power:1000
    },

    {
      id: uuid(),
      name:"Goku",
      power:9500
    },
    {
      id: uuid(),
      name:"Vegeta",
      power:7500
    }
  ];

  addCharacter(character:Character):void{
    const newCharacter: Character = {id: uuid(), ...character}
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index:number):void{
  //   this.characters.splice(index, 1); //(index, 1), dice que borre solo 1 elemento, porque el segundo parametro indica borrar lo que sigue del primer parametro, es decir borra el index=1 y todo lo que le sigue
  // }

  deleteCharacterById(id:string){

    this.characters = this.characters.filter(character => character.id !== id);
  }

  constructor() { }
}
