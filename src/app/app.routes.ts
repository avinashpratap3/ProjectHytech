import { Routes } from '@angular/router';
import {Home} from './pages/home/home'
import { Register } from './pages/register/register';
import { Listings } from './pages/listings/listings';
import { Notfound } from './pages/notfound/notfound';
import { HotelDetail } from './pages/hotel-detail/hotel-detail';
import { EditComponent } from './pages/edit/edit';
export const routes: Routes = [
    {path:'',component:Home},
    {path:'register',component:Register},
    {path:'listings',component:Listings},
    { path: 'hotel/:id', component: HotelDetail },
    { path: 'edit/:id', component: EditComponent },
    {path:'**',component:Notfound},

];

