import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { Proveedor } from '../proveedor';
import { ProveedorService } from '../proveedor.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  titulo: string="Registrar Nuevo Proveedor";
  proveedor : Proveedor = new Proveedor();
  constructor(private proveedorService:ProveedorService,private router:Router) { }

  ngOnInit(): void {
  }

  public crearProveedor(): void{
    this.proveedorService.registrarProveedor(this.proveedor).subscribe(
      //response => this.router.navigate(['/producto']) anterior
      producto => {
        this.router.navigate(['/proveedor'])
       swal.fire("Enhorabuena",'Se ha registrado de manera satisfactoria',"success")
      }
    )
  }
}
