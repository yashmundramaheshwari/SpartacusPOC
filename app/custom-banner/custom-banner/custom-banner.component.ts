import { ChangeDetectionStrategy } from '@angular/core';
import { Component, HostBinding, OnInit } from '@angular/core';
import { CmsBannerComponent } from '@spartacus/core';
import { CmsComponentData } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'cx-banner',
  templateUrl: './custom-banner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomBannerComponent implements OnInit {

  @HostBinding('class') styleClasses: string;

  data$: Observable<CmsBannerComponent> = this.component.data$
   .pipe(
    tap((data) => (this.styleClasses = data.styleClasses))
  );

  constructor(protected component: CmsComponentData<CmsBannerComponent>) {}

  /**
   * Returns `_blank` to force opening the link in a new window whenever the
   * `data.external` flag is set to true.
   */
  getTarget(data: CmsBannerComponent): string | null {
    return data.external === 'true' || data.external === true ? '_blank' : null;
  }
  ngOnInit(): void {
  }
}
