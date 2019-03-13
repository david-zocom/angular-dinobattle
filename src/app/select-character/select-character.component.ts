import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Dinosaur } from '../dinosaur';

@Component({
  selector: 'app-select-character',
  templateUrl: './select-character.component.html',
  styleUrls: ['./select-character.component.css']
})
export class SelectCharacterComponent implements OnInit {
	dinos: Dinosaur[] = [
		{
			name: 'Tyrannosaurus Rex',
			minPower: 100,
			maxPower: 120
		},
		{
			name: 'Bracchiosaurus',
			minPower: 30,
			maxPower: 50
		},
		{
			name: 'Giant Ground Car',
			minPower: 100,
			maxPower: 120
		},
		{
			name: 'Triceratops',
			minPower: 70,
			maxPower: 110
		},
      	{
			name: 'Agustinia',
			minPower: 30,
			maxPower: 50
		},
		{
			name: 'Anzu',
			minPower: 20,
			maxPower: 35
		},
		{
			name: 'Giant Ground Sloth',
			minPower: 1,
			maxPower: 5
		},
		{
			name: 'Ankylosaurus',
			minPower: 55,
			maxPower: 70
		}
	];
	selectedDino: Dinosaur = null;
	@Output() onSelected = new EventEmitter<Dinosaur>();

	constructor() { }

	ngOnInit() { }

	selectedCharacter(dino: Dinosaur) {
		// console.log('select-character: selectedCharacter');
		this.selectedDino = dino;
		// trigga ett event som app.component lyssnar på
		this.onSelected.emit(dino);
	}
}




//
