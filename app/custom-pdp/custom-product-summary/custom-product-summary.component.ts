import { Component, OnInit } from '@angular/core';
import { Product } from '@spartacus/core';
import { CurrentProductService, ICON_TYPE } from '@spartacus/storefront';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-custom-product-summary',
  templateUrl: './custom-product-summary.component.html',
  styleUrls: ['./custom-product-summary.component.scss']
})
export class CustomProductSummaryComponent implements OnInit {
  iconTypes : ICON_TYPE;

  product$ : Observable<Product> = this.currentProductService.getProduct(); 
  constructor(private currentProductService : CurrentProductService) { }

  ngOnInit(): void {
  }

}
