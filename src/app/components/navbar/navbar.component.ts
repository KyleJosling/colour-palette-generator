import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
	host: {}
})
export class NavbarComponent implements OnInit {

	//Number of suggested colours set to three as default
	private kMeans=3;

  constructor(private dataService:DataService) {
	 }
	 ngOnInit() {

	  }

		public sendImage(event){
			//Call setFile function in dataservice which pushses data on Observable
			//The observable is subscribed to by the colours component, and it receives the colours
			this.dataService.setFile(event,this.kMeans);
		}
		public pitch(event){
			this.kMeans=event.value;
		}

}
