package com.example.repository;

import java.util.List;

import com.example.model.Employee;


public interface EmployeeRepositoryCustom {
	List<Employee> findByName(String name);

}