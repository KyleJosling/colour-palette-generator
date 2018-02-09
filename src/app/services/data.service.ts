import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataService {

  private colors: string[] = [];
  private colorsFoundSource = new Subject<string[]>();

	//Observable for colours component
  colorsFound$ = this.colorsFoundSource.asObservable();

  constructor(
    private http: HttpClient,
    private spinnerService: Ng4LoadingSpinnerService) { }

  //Function sending post request to server
  public setFile(event, kMeans) {

    this.spinnerService.show();
    console.log("Service called");
		console.log(kMeans);

    //Interface for returned result
    interface ReturnedColours {
      result: string;
    }
    //Return if no files found
    let files = event.srcElement.files
    if (!files) {
      return;
    }

    //Create form data
    const formData: FormData = new FormData();
    formData.append('file', files[0]);
    formData.append('kMeans', kMeans);

    //Make post request https://art-mind.herokuapp.com/stuff
    this.http.post<ReturnedColours>(`https://art-mind.herokuapp.com/stuff`, formData).subscribe(
      // on response
      (r) => {
        console.log('got r', r);

        //Fill the colour array
        for (var i = 0; i < 5; i++) {
          console.log(r.result[i]);
          this.colors[i] = 'rgb(' + r.result[i][0] + ',' + r.result[i][1] + ',' + r.result[i][2] + ')';
        }

        //Hide spinner when loading is done
        this.spinnerService.hide();
        console.log(this.colors);
        this.colorsFoundSource.next(this.colors);
      },
      //Catch error
      error => {
        console.log(error);
        this.spinnerService.hide();
      });
  }





}
