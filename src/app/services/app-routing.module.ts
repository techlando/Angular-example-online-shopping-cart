import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from "../components/shopping-cart/shopping-cart.component";
import { PageNotFoundComponent } from "../components/shared/page-not-found/page-not-found.component";
import { ShoppingCartCheckoutCartComponent } from "../components/shopping-cart-checkout-cart/shopping-cart-checkout-cart.component";

const routes: Routes = [
    { path: '', redirectTo: '/shop', pathMatch: 'full' },
    { path: 'shop', component: ShoppingCartComponent },
    { path: 'checkout', component: ShoppingCartCheckoutCartComponent },
    { path: '**', component: PageNotFoundComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
 export class AppRoutingModule {


}