package com.Thincrs.Open311.exception;

public class ServicesNotFountException extends RuntimeException{
    public ServicesNotFountException(Long id){
        super("No se pudo encontrar el servicio solicitado con el id" + id);
    }
}
