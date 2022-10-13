package com.aldair.Evaluacion_02.services;

import java.util.ArrayList;
import java.util.Optional;

import com.aldair.Evaluacion_02.model.Proveedor;

public interface ProveedorService {
	ArrayList<Proveedor>ListarProveedor();
	Optional<Proveedor>ProveedorById(long id);
	Proveedor GuardarProveedor(Proveedor proveedor);
	boolean EliminarProveedorById(long id);
}
