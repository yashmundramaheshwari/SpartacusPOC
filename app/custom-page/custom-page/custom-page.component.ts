import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { CmsBannerComponent } from '@spartacus/core';
import { CmsComponentData, CmsComponentsService, CmsInjectorService } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'cx-banner',
  templateUrl: './custom-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomPageComponent implements OnInit {
/* 
  @HostBinding('class') styleClasses: string;

  data$: Observable<CmsBannerComponent> = this.component.data$.pipe(
    tap((data) => (this.styleClasses = data.styleClasses))
  );
 */
  constructor(public component: CmsComponentData<CmsBannerComponent>) {}

  /**
   * Returns `_blank` to force opening the link in a new window whenever the
   * `data.external` flag is set to true.
   */
 /*  getTarget(data: CmsBannerComponent): string | null {
    return data.external === 'true' || data.external === true ? '_blank' : null;
  }
  */ ngOnInit(): void {
  }

}
