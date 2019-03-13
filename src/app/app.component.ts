import { Component } from '@angular/core';
import { Dinosaur } from './dinosaur';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	battleResult: string = 'Please start a battle.';
	firstDino: Dinosaur = null;
	secondDino: Dinosaur = null;

	selectedFirstDino(dino: Dinosaur) {
		// console.log('Selected first dino', dino);
		this.firstDino = dino;
	}
	selectedSecondDino(dino: Dinosaur) {
		// console.log('Selected second dino', dino);
		this.secondDino = dino;
	}

	doBattle() {
		if( this.firstDino.minPower > this.secondDino.minPower ) {
			let name = this.firstDino.name;
			this.battleResult = `${name} wins!`;
		} else {
			let name = this.secondDino.name;
			this.battleResult = `${name} wins!`;
		}
	}
}



//
