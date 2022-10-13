import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proveedor } from '../proveedor';
import { ProveedorService } from '../proveedor.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  id:number;
  proveedor:Proveedor = new Proveedor();
  constructor(private proveedorService:ProveedorService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.proveedorService.obtenerProveedorPorId(this.id).subscribe(dato =>{
      this.proveedor = dato;
    },error => console.log(error));
  }

  irAlaListaDeProveedores(){
    this.router.navigate(['/proveedor']);
    swal('Producto actualizado',`El producto ${this.proveedor.nombre} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.proveedorService.actualizarProveedor(this.id,this.proveedor).subscribe(dato => {
      this.irAlaListaDeProveedores();
    },error => console.log(error));
  }
}
function swal(arg0: string, arg1: string, arg2: string) {
  throw new Error('Function not implemented.');
}