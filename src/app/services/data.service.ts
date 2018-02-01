import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class DataService {

	private colors:string[]=[];
	private colorsFoundSource = new Subject<string[]>();

	colorsFound$=this.colorsFoundSource.asObservable();

  constructor(
		private http: HttpClient,
		private spinnerService:Ng4LoadingSpinnerService) { }

		//Function sending post request to server
	  public setFile(event) {
		console.log("Service called")
		this.spinnerService.show();
		console.log('loading');
	    interface ReturnedColours {
	      result: string;
	    }

	    //Return if no files found
	    let files = event.srcElement.files;
	    if (!files) {
	      return;
	    }
	    //Create form data
	    const formData: FormData = new FormData();
	    formData.append('file', files[0]);

	    //Make post request
	    this.http.post<ReturnedColours>(`https://art-mind.herokuapp.com/stuff`, formData).subscribe(
	      (r) => {
	        console.log('got r', r.result);

	        //Fill the colour array
	        for (var i = 0; i < 5; i++) {
	          console.log(r.result[i]);
	          this.colors[i] = 'rgb(' + r.result[i][0] + ',' + r.result[i][1] + ',' + r.result[i][2] + ')';
	        }

					//Hide spinner when loading is done
					this.spinnerService.hide();
	        console.log(this.colors);
					this.colorsFoundSource.next(this.colors);
	      });
	  }





}
