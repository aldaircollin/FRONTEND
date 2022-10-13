import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './proveedor/detalle/detalle.component';
import { EditarComponent } from './proveedor/editar/editar.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { RegistrarComponent } from './proveedor/registrar/registrar.component';

const routes: Routes = [

  {
    path:'proveedor',
    component: ProveedorComponent
  },

  {
    path:'proveedor/registrar',
    component: RegistrarComponent
  },

  {path : 'proveedor/actualizar/:id',
  component : EditarComponent
  },

  {path : 'proveedor/detalles/:id',
  component : DetalleComponent
  },

  //
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
