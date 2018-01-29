import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,ReactiveFormsModule } from '@angular/forms'
import {DataService} from '../../services/data.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-colours',
  templateUrl: './colours.component.html',
  styleUrls: ['./colours.component.css']
})

export class ColoursComponent implements OnInit {

	//array of colours
	hobbies:number;
	colors:string[]=[];
  constructor(private http:HttpClient) {
		this.hobbies=4;

		}

  ngOnInit() {
  }

	//file for sending post request to server
	public setFile(event) {
    let files = event.srcElement.files
    if (!files) {
      return
    }

    const formData: FormData = new FormData();

		formData.append('file',files[0]);

    this.http.post(`https://art-mind.herokuapp.com/stuff`,formData).subscribe(
      (r)=>{
				console.log('got r', r.result);

				for(var i=0;i<5;i++){
					console.log(r.result[i]);
					this.colors[i]='rgb('+r.result[i][0] +','+r.result[i][1]+','+r.result[i][2]+')';
				}
				console.log(this.colors);

				this.setColor(this.colors);
			}
    )
  }

	private setColor(colors){

		console.log('made');


	}
}
