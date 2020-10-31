import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Observable<any[]>;
  constructor(private afs:AngularFirestore) { }

  getAllProducts(){
    this.products = this.afs.collection('products').valueChanges();
    return this.products;
  }
}
