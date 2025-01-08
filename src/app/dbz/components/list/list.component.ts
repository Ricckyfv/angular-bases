import { ChangeDetectionStrategy, Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListDbzComponent {

  @Input()
  public characterList:Character[] = [
    {
      name:"trunks",
      power:10
    }
  ];

  @Output()
  public onDelete:EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?:string):void{
    // this.characterList[index];
    // console.log(index);
    if( !id ) return; //Si el id no existe, que nunca lo mande a llamar (explicacion de condicional)

    console.log({id});

    this.onDelete.emit(id);
  }

 }
