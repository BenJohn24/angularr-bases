import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent {

  @Output()
  public onDeleteId: EventEmitter<number> = new EventEmitter();

  @Output()
  public deleteCharacterById: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    id:uuid(),
    name:'Trunks',
    power: 10
  }]

  onDeleteCharacter(id?: string):void{
    // TODO: Emitir el ID del personaje

    if( !id ) return;

    console.log({id});

    this.deleteCharacterById.emit(id);
  }
}
