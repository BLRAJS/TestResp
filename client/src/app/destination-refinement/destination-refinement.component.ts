import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule, FormControl, FormsModule, Validators} from '@angular/forms';
import {SearchServiceService} from '../search-service.service';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';   

@Component({
  selector: 'app-destination-refinement',
  templateUrl: './destination-refinement.component.html',
  styleUrls: ['./destination-refinement.component.css']
})
export class DestinationRefinementComponent implements OnInit {

  private loading: boolean = false;
  private results: Observable<any>;
  private searchField: FormControl;
  private step1 :string;
  private step2 :string;
  private userChoice;
  buttonStatus = true;

  constructor(private SearchService: SearchServiceService,private router: Router) {}
// Im chaining couple of oeprators to
// avoid server fetching every 1 miliseconds so I have change it to 200
// do for loading ... in case server delay to respond .. Im showing a wait message
// distinctUntilChanged emit only when the current value is different than the last
// etc etc
  ngOnInit() {
    this.searchField = new FormControl();
    this.results = this.searchField.valueChanges
    .debounceTime(200)
    .distinctUntilChanged()
    .do(_ => this.loading = true)
    .switchMap(term => this.SearchService.search(term))
    .do(_ => this.loading = false)
    .do(_=>this.buttonStatus=true)
    this.step1="(1) Please enter your booking code or ticket number like Cura or Dar"
    this.step2="(2) Select a destination and Continue button is going to be activated"
  }
// Im activating button for next screen only if user select a city
  buttonactive(data){
    this.userChoice=data;
    this.buttonStatus=false;
  }

  sendTo(){
    this.router.navigate(['/choice/'+this.userChoice.airport.code]);
  }

}
