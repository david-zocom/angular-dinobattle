import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Dinosaur } from '../dinosaur';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.css']
})
export class CharacterInfoComponent implements OnInit {
	@Input() name: string;
	@Input() minPower: number;
	@Input() maxPower: number;
	@Output() onSelected = new EventEmitter<Dinosaur>();

	constructor() { }

	ngOnInit() { }

	handleClick() {
		// tala om för parent att användaren klicka på mig
		console.log('character info: handleClick');
		this.onSelected.emit({
			name: this.name,
			minPower: this.minPower,
			maxPower: this.maxPower
		});
	}
}




//
