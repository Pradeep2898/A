import { Component, OnInit } from '@angular/core';
import { Products } from '../Products';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  products: Products[];

  constructor(private ps: ProductService) { }

  ngOnInit(): void {
    this.ps.getAllProducts().subscribe(data => {
      this.products = data;
      console.log(this.products);
    })
  }

}
