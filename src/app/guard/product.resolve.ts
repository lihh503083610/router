import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Product} from '../product/product.component';
export class ProductResolve implements Resolve<Product> {
  constructor(private router: Router) {

  }
   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
   let productId: number = route.params['id'];
   if (productId === 1) {
     return new Product(1, 'iphon7');
   }else {
     this.router.navigate(['/hom']);
   }
   }
}
