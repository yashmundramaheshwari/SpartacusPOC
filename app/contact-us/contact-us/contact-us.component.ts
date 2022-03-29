import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AnonymousConsent, GlobalMessageEntities, GlobalMessageService, GlobalMessageType, RoutingService, Title, UserService } from '@spartacus/core';
import { CustomFormValidators, sortTitles } from '@spartacus/storefront';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ContactUs } from './ContactUs';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  titles = ['Warranty Claim', 'Ecom Order Changes',
    'Standard Customer Request', 'Pro Application',
    'Pro Application - CA', 'Application Pro', 'Modifications de commande en ligne'];

  model = new ContactUs(this.titles[0], 'Nelson', 'Chinna', 'nelson.chinaa@gmail.com', 'Everything is worst');

  submitted = false;
  constructor(private fb: FormBuilder, private router: Router, private _activatedRouter: ActivatedRoute) { }


  ngOnInit(): void {
  }

  onSubmit() {
    console.log(document.getElementById('alert-message'));
    document.getElementById('alert-message').style.display = 'block';
  }
  closeAlert() {
    document.getElementById('alert-message').style.display = 'none';
  }
  newContactUs() {
    this.model = new ContactUs('', '', '', '', '');
  }

}

