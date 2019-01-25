import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  fakeLinksAbout: string[]= [];
  fakeLinksChat: string[]= [];
  fakeLinksHelp: string[]= [];
  newsLetterForm: FormControl;

  constructor() { 
    this.fakeLinksAbout = [
      'Generals rules',
      'Terms of use',
      'Personnal data',
      'Legal notice',
      'Report abuse',
      'Cookies'
    ];
    this.fakeLinksChat = [
      'Who are we?',
      'Recrutement',
      'Contact us'
    ];
    this.fakeLinksHelp = [
      'Settings',
      'Need Help?',
      'Plus d\'idées'
    ];
    this.newsLetterForm = new FormControl('');
  }

  ngOnInit() {
  }

}
