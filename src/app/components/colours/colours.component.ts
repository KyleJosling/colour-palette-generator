import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-colours',
  templateUrl: './colours.component.html',
  styleUrls: ['./colours.component.css']
})

export class ColoursComponent implements OnInit {

	//array of colours
  colors: string[] = ["rgb(109,187,229)","rgb(42,126,202)","rgb(82,208,218)","rgb(245,177,194)","rgb(255,202,88)"];

	constructor(private dataService:DataService) {

		//Subscribe to the data service so we can get updated colours
		this.dataService.colorsFound$.subscribe((cols)=>{
		this.colors=cols;
	});

	 }

  ngOnInit() {
  }


}
