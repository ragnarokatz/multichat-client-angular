import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav.component";
import { NotFoundComponent } from "./not-found.component";
import { HomeComponent } from "./home.component";
import { QuestionDetailComponent } from "./question-detail.component";
import { QuestionListComponent } from "./question-list.component";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NotFoundComponent,
    HomeComponent,
    QuestionDetailComponent,
    QuestionListComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
