import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { translations, translationChunksConfig } from '@spartacus/assets';
import { B2cStorefrontModule, CmsComponentData, CmsComponentsService } from '@spartacus/storefront';
import { CustomPdpModule } from './custom-pdp/custom-pdp.module';
import { ProductCarouselModule } from './product-carousel/product-carousel.module';
import { ContactUsModule } from './contact-us/contact-us.module';
import { Router, RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { CmsConfig, ConfigModule, provideDefaultConfig } from '@spartacus/core';
import { CustomBannerComponent } from './custom-banner/custom-banner/custom-banner.component';
import { CustomBannerModule } from './custom-banner/custom-banner.module';
const appRoutes : Routes = [
{ path : 'custom-banner' , component : CustomBannerComponent },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl: 'https://spartacus-demo.eastus.cloudapp.azure.com:8443/',
          prefix : '/occ/v2/'
        }
      },
      context: {
        urlParameters : ['baseSite','language','currency'],
        baseSite: ['electronics-spa'],
        currency: ['USD'],
        language: ['en'],
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en'
      },
      features: {
        level: '3.0'
      }
    }),
    BrowserTransferStateModule,
    RouterModule.forRoot(
      appRoutes, { enableTracing : true}
    ),
    CustomPdpModule,
    ProductCarouselModule,
    ContactUsModule,
    AppRoutingModule,
    CustomBannerModule 
  ],
  providers: [
 /*    provideDefaultConfig(<CmsConfig>{
      cmsComponents : {
        BannerComponent : {
          component : CustomBannerComponent
        },
      },
    }),
  */ ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(router : Router) {
    
  }
}
