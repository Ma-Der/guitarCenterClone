import { Component } from '@angular/core';
import { BasicMenuComponent } from '../../components/Header/basic-menu/basic-menu.component';
import { BreadcrumbsComponent } from '../../components/Header/breadcrumbs/breadcrumbs.component';
import { LoginComponent } from '../../components/Header/login/login.component';
import { ProductMenuComponent } from '../../components/Header/product-menu/product-menu.component';
import { SearchComponent } from '../../components/Header/search/search.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    BasicMenuComponent,
    BreadcrumbsComponent,
    LoginComponent,
    ProductMenuComponent,
    SearchComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
