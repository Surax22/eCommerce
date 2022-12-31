import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCartArrowDown, faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/service/cart.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faCartArrowDown = faCartArrowDown;
  faSearch = faSearch; 
  faShoppingBag = faShoppingBag;
  
  rout!: boolean
  public totalItem : number = 0;
  public searchTerm : string = '';
  constructor(private cartService: CartService, 
              private router:Router) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }
  search(event: any){
    this.searchTerm = (event.target as HTMLInputElement).value
    console.log(this.searchTerm)
    this.cartService.search.next(this.searchTerm)
  }
  hasrout(route: string, route2: string){
    this.rout = !this.rout
    return this.router.url === route || this.router.url === route2;
  }

}
