import { Component, Input } from '@angular/core';
import { ShoppingCartSVGComponent } from '../../../shared/Icons/ShoppingCartSVG/shopping-cart-svg.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ShoppingCartSVGComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  @Input() counter = 0;
}
