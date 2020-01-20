import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('InputFile') InputFile: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  uploadFile() {
    console.log(this.InputFile.nativeElement.files[0]);
  }

}
