import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomPageComponent } from './custom-page/custom-page.component';
import { RouterModule, Routes } from '@angular/router';
import { CmsComponentData, CmsComponentsService, GenericLinkModule, MediaModule } from '@spartacus/storefront';
import { CmsConfig, provideDefaultConfig } from '@spartacus/core';

const customPageRoutes: Routes = [
  {
    path: '',
    component: CustomPageComponent,
  }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(customPageRoutes), GenericLinkModule, MediaModule 
  ],
  providers : [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents : {
        BannerComponent : {
          component : CustomPageComponent
        },
      },
    }),
  ],
  declarations: [CustomPageComponent],
  entryComponents : [ CustomPageComponent ],
  exports : [ RouterModule ]
})
export class CustomPageModule { }
