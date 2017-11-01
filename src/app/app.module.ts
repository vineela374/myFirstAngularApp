import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { MatListModule, MatCardModule, MatSlideToggleModule, MatDialogModule, MatIconModule, MatInputModule, MatSnackBarModule, MatTabsModule, MatButtonModule,MatLineModule, MatToolbarModule } from '@angular/material'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { FormsModule } from '@angular/forms';
import { CollectionComponent } from './collection/collection.component';
import { RatingCategoryPipe } from './pipes/rating-category.pipe';
import { RatingComponent } from './rating/rating.component';
import { HttpModule } from '@angular/http';
import { TabsComponent } from './tabs/tabs.component'; 
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CollectionComponent,
    RatingCategoryPipe,
    RatingComponent,
    TabsComponent, 
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    MatListModule, 
    MatTabsModule,
    MatSnackBarModule, 
    MatDialogModule, 
    MatCardModule,
    MatIconModule, 
    MatSlideToggleModule, 
    MatButtonModule, 
    MatLineModule, 
    MatInputModule, 
    MatToolbarModule,
    BrowserAnimationsModule,
    HttpModule, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
