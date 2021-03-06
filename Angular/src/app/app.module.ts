import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { CreateticketComponent } from './createticket/createticket.component';
import { FavoritedticketComponent } from './favoritedticket/favoritedticket.component';
import { TicketComponent } from './ticket/ticket.component';
import { BookmarkedticketComponent } from './bookmarkedticket/bookmarkedticket.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';

const routes: Routes = 
[
  {path:'',redirectTo:'ticket', pathMatch: 'full' },
  {path:'ticket', component:TicketComponent},
  {path:'welcomepage', component:WelcomepageComponent},
  {path:'createticket', component:CreateticketComponent},
  {path:'bookmarkedticket', component:BookmarkedticketComponent},
  {path:'favoritedticket', component:FavoritedticketComponent},
  {path:'**',component:CreateticketComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    WelcomepageComponent,
    CreateticketComponent,
    TicketComponent,
    BookmarkedticketComponent,
    FavoritedticketComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatListModule,
    MatButtonModule ,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
