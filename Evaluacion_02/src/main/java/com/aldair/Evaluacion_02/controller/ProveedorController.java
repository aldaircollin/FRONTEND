package com.aldair.Evaluacion_02.controller;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aldair.Evaluacion_02.model.Proveedor;
import com.aldair.Evaluacion_02.services.ProveedorService;
import com.aldair.Evaluacion_02.excepciones.ResourceNotFoundException;
@RestController
@RequestMapping("Proveedor")
@CrossOrigin("http://localhost:4200/")
public class ProveedorController {
	
	@Autowired
	ProveedorService proveedorService;
		
	@GetMapping("/Listar")
	public ArrayList<Proveedor>ListarProveedor(){
		return proveedorService.ListarProveedor();
	}
	
	@GetMapping("/BuscarPorId/{id}")
public Optional<Proveedor>ListarProveedorPorId(@PathVariable("id")long id){
		return proveedorService.ProveedorById(id);
	}
	
	
	
	@PostMapping("/Guardar")
	public Proveedor GuardarProveedor(@RequestBody Proveedor proveedor) {
		return proveedorService.GuardarProveedor(proveedor);
}
	
	//este metodo sirve para actualizar empleado
		@PutMapping("/Actualizar/{id}")
		public ResponseEntity<Proveedor> actualizarProveedor(@PathVariable Long id,@RequestBody Proveedor detallesProveedor){
			Proveedor proveedor = proveedorService.ProveedorById(id)
					            .orElseThrow(() -> new ResourceNotFoundException("No existe el proveedor con el ID : " + id));
			
			proveedor.setNombre(detallesProveedor.getNombre());
			proveedor.setApellidos(detallesProveedor.getApellidos());
			proveedor.setDireccion(detallesProveedor.getDireccion());
			proveedor.setTelefono(detallesProveedor.getTelefono());
			proveedor.setEmail(detallesProveedor.getEmail());
			
			Proveedor proveedorActualizado = proveedorService.GuardarProveedor(proveedor);
			return ResponseEntity.ok(proveedorActualizado);
	    }

	@DeleteMapping("/Eliminar/{id}")
	public String EliminarProveedorPorId(@PathVariable("id")long id) {
	if (proveedorService.EliminarProveedorById(id))
		return "se ha eliminado";
		
	else {
		return "no se ha elimnado";
	}
	
	}
	
}
