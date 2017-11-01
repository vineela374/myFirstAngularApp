import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { AboutComponent } from "../about/about.component";
import { CollectionComponent } from "../collection/collection.component";
import { BookDetailComponent } from "../book-detail/book-detail.component";

const routes: Routes = [
  {
    path: "about",
    component: AboutComponent
  },
  { 
    path: "collection", 
    component: CollectionComponent
   },
  { path: "collection/:id", 
    component: BookDetailComponent 
},
  {
    path: "",
    redirectTo: "/about",
    pathMatch: "full"
  }
];

@NgModule({ imports: [RouterModule.forRoot(routes)], exports: [RouterModule] })
export class AppRoutingModule {}
