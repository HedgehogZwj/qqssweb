import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LoginGuard } from './login.guard';
import { AuthService } from './auth.service';
import { UserComponent } from './user/user.component';
import { DeviceComponent } from './device/device.component';
import { DataComponent } from './data/data.component';
import { LedComponent } from './led/led.component';
import { HumitureComponent } from './humiture/humiture.component';
import { AirComponent } from './air/air.component';
import { WarmerComponent } from './warmer/warmer.component';
import { FanComponent } from './fan/fan.component';
import { AdddeviceComponent } from './adddevice/adddevice.component';
import { AllComponent } from './all/all.component';
import { ManagerComponent } from './manager/manager.component';
import { ProductsComponent } from './products/products.component';
import { CustomerComponent } from './customer/customer.component';
import { AddhumComponent } from './addhum/addhum.component';
// import { NgxEchartsModule } from 'ngx-echarts';



const ProductsChildRoutes: Routes = [
  { path: 'all', component: AllComponent },
  { path: '', redirectTo: 'all', pathMatch: 'full' },
  { path: 'led', component: LedComponent },
  { path: 'humiture', component: HumitureComponent },
  { path: 'air', component: AirComponent },
  { path: 'warmer', component: WarmerComponent },
  { path: 'fan', component: FanComponent },
  { path: 'addhum', component: AddhumComponent },
]

const ManagerChildRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent, children: ProductsChildRoutes },
  { path: 'data', component: DataComponent },
  { path: 'customer', component: CustomerComponent }
]

const routes: Routes = [
  { path: 'login', component: LoginComponent },//登录
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'manager', component: ManagerComponent, children: ManagerChildRoutes,
    // canActivate: [LoginGuard]
  }
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserComponent,
    DeviceComponent,
    DataComponent,
    LedComponent,
    HumitureComponent,
    AirComponent,
    WarmerComponent,
    FanComponent,
    AdddeviceComponent,
    AllComponent,
    ManagerComponent,
    ProductsComponent,
    CustomerComponent,
    AddhumComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes), // 引入路由模块
    // NgxEchartsModule,
  ],
  providers: [LoginGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
