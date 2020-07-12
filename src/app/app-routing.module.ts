import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { AuthGuardService } from "./shared/auth.guard.service";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
