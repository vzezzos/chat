import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  fakeLinks: string[]= [];

  constructor() { 
    this.fakeLinks = [
      "Settings",
      "About chat",
      "Informations",
      "Contacts Us",
      "About Us",
      'Recrutment',
    ];
  }

  ngOnInit() {
  }

}
