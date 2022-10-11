import { Component, OnInit } from '@angular/core';
import { AppiService } from '../appi.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

  constructor(private myapi:AppiService) {
    this.fetchData()
  }
  fetchData=()=>{
    this.myapi.viewAll().subscribe((data)=>{
      this.donorData=data
    })
  }
  donorData:any=[]
  ngOnInit(): void {
  }

}
