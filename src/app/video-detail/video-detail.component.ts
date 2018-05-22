import { Component, OnInit , OnDestroy} from '@angular/core';
import  {ActivatedRoute} from '@angular/router';
// provider taht allows us  workwith route that  has been suggested to us and getting params fro that route.




@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit, OnDestroy {
  private routeSub:any;
  slug : string;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params =>{
      //console.log(Params);
      this.slug = params['slug'];
    })
  }
  ngOnDestroy(){
  this.routeSub.unSubscribe()
  }

}
