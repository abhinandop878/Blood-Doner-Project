import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-doner',
  templateUrl: './add-doner.component.html',
  styleUrls: ['./add-doner.component.css']
})
export class AddDonerComponent implements OnInit {

  constructor() { }
  donorName=""
  bloodGroup=""
  dob=""
  lastDonorData=""
  anyPreviousDiseases=""
  address=""
  pincode=""
  mobileNo=""
  emailID=""

  readValue=()=>{
    let data={
      "donorName":this.donorName,
      "bloodGroup":this.bloodGroup,
      "dob":this.dob,
      "lastDonorData":this.lastDonorData,
      "anyPreviousDiseases":this.anyPreviousDiseases,
      "address":this.address,
      "pincode":this.pincode,
      "mobileNo":this.mobileNo,
      "emailID":this.emailID
    }
    console.log(data)
  }
  ngOnInit(): void {
  }

}
