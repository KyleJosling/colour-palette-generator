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

  constructor(private dataService:DataService) {
	 }
	 ngOnInit() {

	  }

		public sendImage(event){
			this.dataService.setFile(event);
		}

}
