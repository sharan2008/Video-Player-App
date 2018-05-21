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
    name:'item1',
    slug:'item1'
  },
  {
    name:'item2',
    slug:'item2'
  },
  {
    name:'item3',
    slug:'item3'
  },
  {
    name:'item4',
    slug:'item4'
  },

]



  constructor() { }

  ngOnInit() {
  }

}
