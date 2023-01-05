import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { ResultsComponent } from './results/results.component';
// import { HomepageComponent } from './homepage/homepage.component';
// import { QuizPageComponent } from './quiz-page/quiz-page.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'form', component: FormComponent },
  { path: 'results', component: ResultsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}