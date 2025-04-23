import { provideRouter, Routes, withViewTransitions } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { ApplicationConfig } from '@angular/core';

export const routes: Routes = [
    { path: '', component: ListComponent },
    { path: 'detail-component/:name', component: DetailComponent}
];

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes, withViewTransitions())],
};
