import { Routes } from '@angular/router';
import { AnmeldungComponent } from './anmeldung/anmeldung.component';
import { BezahlSystemTest1Component } from './bezahl-system-test-1/bezahl-system-test-1.component';
import { LayoutComponent } from './layout/layout.component';
import { Component } from '@angular/core';
import { EndscreenComponent } from './endscreen/endscreen.component';
import { GuthabenComponent } from './Guthaben/guthaben.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'anmeldung'},
    {path:'anmeldung', pathMatch: 'full', component: AnmeldungComponent },
    {path:'layout', pathMatch: 'full', component: LayoutComponent},
    {path:'bezahlsystemTest1', pathMatch: 'full', component: BezahlSystemTest1Component },
    {path: 'endscreen', pathMatch: 'full', component: EndscreenComponent},
    {path: 'guthaben', pathMatch: 'full', component: GuthabenComponent}
]
