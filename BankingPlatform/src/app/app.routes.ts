import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule,Router,Routes} from '@angular/router';

export const routes: Routes= [
    {
        path:'',
        component:LoginComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'home',
        component:HomeComponent
    },
    
];

export const routing= RouterModule.forRoot(routes);