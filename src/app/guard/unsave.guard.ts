import {ActivatedRoute, CanDeactivate} from '@angular/router';
import {ProductComponent} from '../product/product.component';

export class UnsaveGuard implements CanDeactivate<ProductComponent> {
  canDeactivate(component: ProductComponent) {
    return window.confirm('没保存，确认离开吗？');
  }
}
