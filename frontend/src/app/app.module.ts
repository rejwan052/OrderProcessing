import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {AuthModule} from "./auth/auth.module";
import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./core/core.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersDashboardComponent } from './dashboard/orders-dashboard/orders-dashboard.component';
import { ProductsDashboardComponent } from './dashboard/products-dashboard/products-dashboard.component';
import { ProductsComponent } from './products/products.component';
import { EmployeesComponent } from './employees/employees.component';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailsComponent } from './orders/order-details/order-details.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OrdersDashboardComponent,
    ProductsDashboardComponent,
    ProductsComponent,
    EmployeesComponent,
    CustomersComponent,
    OrdersComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
