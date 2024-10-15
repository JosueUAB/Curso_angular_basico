import { Routes } from '@angular/router';
import { MayminComponent } from './maymin/maymin.component';
import { FechaComponent } from './pages/fecha/fecha.component';

export const routes: Routes = [
 {path:'',component:FechaComponent},
//! patch:'que se va a traer,se define el component, se llama al component}
{path:'maymin',component:MayminComponent},
{path:'fecha',component:FechaComponent},
//*por defecto
{path:'**',redirectTo:'/maymin', pathMatch:'full'},


];
