import { Component } from '@angular/core';
import { Product } from '../../model/product.model';
import { Model } from '../../model/repository.model';
import { MODES, SharedStateService } from '../shared-state.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  providers: []
})
export class ProuctTableComponent {

  constructor(private model: Model, private state: SharedState) { }
  getProduct(key: number): Product | undefined {
    return this.model.getProduct(key);
  }
  getProducts(): Product[] {
    return this.model.getProducts();
  }

  deleteProduct(key?: number) {
    if (key != undefined) {
      this.model.deleteProduct(key);
    }
  }
  editProduct(key?: number) {
    this.state.update(MODES.EDIT, key)
  }
  createProduct() {
    this.state.update(MODES.CREATE);
  }

}