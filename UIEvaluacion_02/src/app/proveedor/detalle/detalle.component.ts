import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Proveedor } from '../proveedor';
import { ProveedorService } from '../proveedor.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  id:number;
  proveedor:Proveedor;
  constructor(private route:ActivatedRoute,private proveedorService:ProveedorService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.proveedor = new Proveedor();
    this.proveedorService.obtenerProveedorPorId(this.id).subscribe(dato => {
      this.proveedor = dato;
      swal(`Detalles del producto ${this.proveedor.nombre}`);
    });
  }

}
function swal(arg0: string) {
  throw new Error('Function not implemented.');
}

