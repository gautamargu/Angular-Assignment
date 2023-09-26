import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
  import { HomeComponent } from './component/home/home.component';
import { EditComponent } from './component/edit/edit.component';
import { ViewComponent } from './component/view/view.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'edit' ,component:EditComponent},
  {path:'view/:id' , component:ViewComponent},
  {path:'form', component: UserFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
