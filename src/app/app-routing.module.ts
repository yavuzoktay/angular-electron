import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./shared/components";

import { DetailRoutingModule } from "./detail/detail-routing.module";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), DetailRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
