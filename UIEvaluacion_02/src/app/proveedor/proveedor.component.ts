import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { Proveedor } from './proveedor';
import { ProveedorService } from './proveedor.service';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {
  proveedor:Proveedor[];
  constructor(private proveedorService:ProveedorService,private router:Router) { }

  ngOnInit(): void {
    this.obtenerProveedores();
  }
  

  actualizarProveedor(id:number){
    this.router.navigate(['proveedor/actualizar',id]);
  }
  private obtenerProveedores(){
    this.proveedorService.ListarProveedores().subscribe(dato => {
      this.proveedor = dato;
    });
  }

  eliminarProveedor(id:number){
    swal.fire({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar al proveedor",
      icon: 'warning',
      showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si , elimínalo',
        cancelButtonText: 'No, cancelar'
        })
        .then(resultado => {
            if (resultado.value) {
              this.proveedorService.eliminarProveedor(id).subscribe(dato => {
                console.log(dato);
                this.obtenerProveedores();
                swal.fire(
                  'Empleado eliminado',
                  'El empleado ha sido eliminado con exito',
                  'success'
                )
              })
            }
          })
}
  
  verDetallesDelProveedor(id:number){
    this.router.navigate(['proveedor/detalles',id]);
  }




}


