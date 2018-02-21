import { Component, OnInit ,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { SearchServiceService } from '../search-service.service';


@Component({
  selector: 'app-choice-summary',
  templateUrl: './choice-summary.component.html',
  styleUrls: ['./choice-summary.component.css']
})

export class ChoiceSummaryComponent implements OnInit , OnDestroy {
  paramid:any;
  sub: any;
  result;
  
  constructor(private route: ActivatedRoute,
  private SearchService: SearchServiceService) { }

  ngOnInit() {
    this.sub =  this.route.params.subscribe(params => {
      console.log(params)
        this.paramid = params['id'];
    });

    this.SearchService.searchParam(this.paramid).subscribe( data => {
    this.result=data[0];
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
