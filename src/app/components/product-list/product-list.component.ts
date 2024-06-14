import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IProduct } from 'src/app/models/products';
import { ModalService } from 'src/app/services/modal.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  title = 'my-app';
  loading: boolean = true;
  products$: Observable<IProduct[]>;
  term: string = '';

  constructor(
    private productService: ProductService,
    public modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.loading = false;
    this.products$ = this.productService
      .getAll()
      .pipe(tap(() => (this.loading = false)));
  }
}
