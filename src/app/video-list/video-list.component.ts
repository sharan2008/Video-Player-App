import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
title ="Video List";
//videoList = ['item1', 'item2', 'item3', 'item4', 'item5'];

videoList=[
  {
    name:"item 1",
    slug:"item-1"
  },
  {
    name:"item 2",
    slug:"item-2"
  },
  {
    name:"item 3",
    slug:"item-3"
  },
  {
    name:"item 4",
    slug:'item-4'
  },

]



  constructor() { }

  ngOnInit() {
  }

}
