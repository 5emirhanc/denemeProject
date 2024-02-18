import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    RouterOutlet,
    ScrollingModule,
    RouterLink,
    NzMenuModule,
    NzModalModule,
    NzGridModule,
    NzSpinModule,
    ProductDetailComponent
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {

  items = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);

  constructor(private httpClient: HttpClient) {}
  //constructor(private activatedRoute : ActivatedRoute){}
  photos;
  ngOnInit(): void {
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/photos')
      .subscribe((photos) => (this.photos = photos));
  }

  isVisible = false;

  showModal(): void {
    this.isVisible = true;
    
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
