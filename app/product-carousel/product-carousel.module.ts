import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsConfig, provideDefaultConfig, UrlModule } from '@spartacus/core';
import { CarouselModule,MediaModule } from '@spartacus/storefront';
import { ProductCarouselComponent } from './product-carousel/product-carousel.component';

@NgModule({
  imports: [CommonModule, CarouselModule,MediaModule, UrlModule],
  providers: [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        ProductCarouselComponent: {
          component: ProductCarouselComponent,
        },
      },
    }),
  ],
  declarations: [ProductCarouselComponent],
  entryComponents: [ProductCarouselComponent],
  exports: [ProductCarouselComponent],
})
export class ProductCarouselModule {}