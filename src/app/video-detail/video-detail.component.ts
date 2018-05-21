import { Component, OnInit } from '@angular/core';
import  {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {
  private routeSub:any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(Params =>{
      console.log(Params);
    })
  }

}
