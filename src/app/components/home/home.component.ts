import { Component, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
// import { FilterService } from 'src/app/sheared/filter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public productList: any;
  public filterCategory: any;
  public findCategory: any;
  searchKey: string = "";
  faArrowRight = faArrowRight;


  constructor(private api: ApiService,
    private cartService: CartService,
    // private filterService: FilterService
  ) { }

  ngOnInit(): void {
    this.api.getCategory()
      .subscribe(res => {
        this.findCategory = res;
      })
    this.api.getProduct()
      .subscribe(res => {
        this.productList = res;
        this.filterCategory = res;
        this.productList.forEach((a: any) => {
          Object.assign(a, { quantity: 1, total: a.price });
        });

      });
  }
  addtoCart(item: any){
  this.cartService.addtoCart(item);
  }
filter(category: string){
  this.filterCategory = this.productList
  .filter((a:any)=>{
    if(a.category == category || category == ''){
      return a;
    }
  })
  }
}
