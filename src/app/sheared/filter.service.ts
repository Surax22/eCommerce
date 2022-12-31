// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
// import { ApiService } from '../service/api.service';
// import { CartService } from '../service/cart.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class FilterService {
//   public filterCategory: any;
//   public productList:any;
//   searchKey!: string;

//   constructor(private api : ApiService,
//     private cartService: CartService) { 
//       this.api.getProduct()
//     .subscribe(res=>{
//       this.productList = res;
//       this.filterCategory =res;
//       this.productList.forEach((a: any)=> {
//         Object.assign(a, {quantity:1, total:a.price});
//       });
//     });
//     this.cartService.search.subscribe((val:any)=>{
//       this.searchKey = val
//     });
//     }
// //  ngOnInit(): void {
//     // this.api.getProduct()
//     // .subscribe(res=>{
//     //   this.productList = res;
//     //   this.filterCategory =res;
//     //   this.productList.forEach((a: any)=> {
//     //     Object.assign(a, {quantity:1, total:a.price});
//     //   });
//     // });
//     // this.cartService.search.subscribe((val:any)=>{
//     //   this.searchKey = val
//     // });
//   // }

//   filter(category: string){
//     this.filterCategory = this.productList.filter((a:any)=>{
//       if(a.category == category || category == ''){
//         return a;
//       }
//     })

//   }
// }
