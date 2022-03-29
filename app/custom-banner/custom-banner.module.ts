import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomBannerComponent } from './custom-banner/custom-banner.component';
import { CmsConfig, provideDefaultConfig } from '@spartacus/core';
import { RouterModule } from '@angular/router';
import { CmsComponentData, CmsComponentsService, GenericLinkModule, MediaModule } from '@spartacus/storefront';

@NgModule({
  declarations: [CustomBannerComponent],
  imports: [
    CommonModule, RouterModule, GenericLinkModule, MediaModule
  ],
  providers : [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents : {        
        BannerComponent : {
          component : CustomBannerComponent
        },
      },
    }),
     [CmsComponentData],
  ],
  exports : [CustomBannerComponent]
})
export class CustomBannerModule { }
