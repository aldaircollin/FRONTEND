package com.aldair.Evaluacion_02.services.impl;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aldair.Evaluacion_02.model.Proveedor;
import com.aldair.Evaluacion_02.repository.ProveedorRepository;
import com.aldair.Evaluacion_02.services.ProveedorService;

@Service
public class ProveedorImpl implements ProveedorService{
	
	@Autowired
	ProveedorRepository proveedorRepository;

	@Override
	public ArrayList<Proveedor> ListarProveedor() {
		// TODO Auto-generated method stub
		return (ArrayList<Proveedor>)proveedorRepository.findAll();
	}
	

	@Override
	public Optional<Proveedor> ProveedorById(long id) {
		// TODO Auto-generated method stub
		return proveedorRepository.findById(id);
	}

	@Override
	public Proveedor GuardarProveedor(Proveedor proveedor) {
		// TODO Auto-generated method stub
		return proveedorRepository.save(proveedor);
	}

	@Override
	public boolean EliminarProveedorById(long id) {
		try {
			Optional<Proveedor>proveedor=ProveedorById(id);
			proveedorRepository.delete(proveedor.get());
			return true;
		} catch (Exception e) {
			return false;
		}
	}

	

	
	

}
