import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
	host: {
		'(window:scroll)': 'updateHeader($event)'
}
})
export class NavbarComponent implements OnInit {

  constructor() { }
	 ngOnInit() {

	  }

	  isScrolled = false;
		currPos: Number = 0;
		startPos: Number = 0;
		changePos: Number = 400;

		updateHeader(evt) {
			console.log('made it');
				this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
				if(this.currPos >= this.changePos ) {
						this.isScrolled = true;
				} else {
						this.isScrolled = false;
				}
		}



}
