import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

 

  name="groupe5";

  ImageURL="assets/image.jpeg";

  NameList=['Fatma','Yosra','karama','Khadija'];

  condition=false;

  name2:any

  date=new Date()


  constructor() { }

  ngOnInit(): void {
  }

}
