import { Component, OnInit, Input } from '@angular/core';
import { Product } from './models/product';
import { ProductService } from './services/productservice';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
        :host ::ng-deep .p-dialog .product-image {
            width: 150px;
            margin: 0 auto 2rem auto;
            display: block;
        }
    `,
  ],
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  products: Product[];

  constructor(
    private productService: ProductService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.productService.getProducts().then((data) => (this.products = data));
  }
}
