import { Component } from '@angular/core';
import { HighlightDirective } from './Highlight';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Assignament!';
	user: any = [
		{ username: 'Noel', id: 1 },
		{ username: 'Bose', id: 2 },
		{ username: 'Bill', id: 3 },
		{ username: 'Remya', id: 4 }

	];
	 userList : any = 
	[
	{ name: "Avnesh Shakya", age: 26, profession:"Employee"}, 
	{ name: "Adam", age: 30, profession: "Employee" },
	{ name: "Jose", age: 25, profession: "Labourer" },
	{ name: "Bill", age: 29, profession: "Employee" },
	];
  constructor() { }
  
}
