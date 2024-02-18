import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  constructor(private activatedRoute : ActivatedRoute){}

  photos: any;
  
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) =>{
      this.photos = params['id'];
      console.log("asd",this.photos)
    })
  }
}
