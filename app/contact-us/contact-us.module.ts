import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard, CmsConfig, I18nModule, NotAuthGuard, provideDefaultConfig, UrlModule } from '@spartacus/core';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormErrorsModule, LoginModule, SpinnerModule } from '@spartacus/storefront';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ContactUs } from './contact-us/ContactUs';

@NgModule({
  imports: [
    CommonModule, LoginModule,
    ReactiveFormsModule,
    RouterModule,
    UrlModule,
    I18nModule,
    SpinnerModule,
    FormErrorsModule,
    FormsModule
  ],
  providers: [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        CMSParagraphComponent: {
          component: ContactUsComponent,
        },
      },
    }),
  ],
  declarations: [ContactUsComponent],
  entryComponents: [ContactUsComponent],
  exports: [ContactUsComponent],
})
export class ContactUsModule { }
