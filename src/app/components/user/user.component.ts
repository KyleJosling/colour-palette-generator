import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	name:string;
	age:number;
	email:string;
	address:Address;
	hobbies:string[];
	posts:Post[];
  constructor() {



	}
  ngOnInit() {
		this.name = 'John';
		this.age=20;
		this.address={
			street:'50 Main st.',
			city:'Boston',
			state:'MA'
		}

	this.hobbies=['tennis','skiing','write code'];
  }

	onClick(){

		this.name="Kyle";
		this.hobbies.push('New Hobby');
	}
	addHobby(hobby){

		this.hobbies.push(hobby);
		return false;
	}
	deleteHobby(hobby){
		for (let i=0;i< this.hobbies.length;i++){
			if(this.hobbies[i]==hobby){
				this.hobbies.splice(i,1);
			}
		}
	}
}

interface Address{
		street:string,
		city:string,
		state:string;
}
interface Post{

	id:number,
	title:string,
	body:string,
	userId:number
}
