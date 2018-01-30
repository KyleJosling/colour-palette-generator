import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { DataService } from '../../services/data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-colours',
  templateUrl: './colours.component.html',
  styleUrls: ['./colours.component.css']
})

export class ColoursComponent implements OnInit {

  //array of colours
  colors: string[] = [];

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
  }
	public chooseFile(){
	$('#fileInput').click();
	}

  //file for sending post request to server
  public setFile(event) {

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
        console.log(this.colors);
      });
  }
}
