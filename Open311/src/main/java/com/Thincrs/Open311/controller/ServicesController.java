package com.Thincrs.Open311.controller;

import com.Thincrs.Open311.model.Services;
import com.Thincrs.Open311.repository.ServicesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ServicesController {
    @Autowired
    private ServicesRepository servicesRepository;
    @PostMapping("/service")
    Services newService(@RequestBody Services newService){
        return  servicesRepository.save(newService);
    }
    @GetMapping("/services")
    List<Services> getAllServices(){
        return servicesRepository.findAll();
    }




}
