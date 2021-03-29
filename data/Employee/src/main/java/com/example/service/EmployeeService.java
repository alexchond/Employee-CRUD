package com.example.service;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.model.Employee;
import com.example.repository.EmployeeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;

@Service
public class EmployeeService {
	

@Lazy
@Autowired
private EmployeeRepository employeeRepository;


	//getting all Employee records  
	public List<Employee> getAllEmployee()   
	{  
		List<Employee> employees = new ArrayList<Employee>();  
		employeeRepository.findAll().forEach(employee -> employees.add(employee));  
		return employees;  
	}  
	//getting a specific record  
	public Employee getEmployeeById(Integer id)   
	{  
		return employeeRepository.findById(id).get();  
	}  
	public void saveOrUpdate(Employee employee)   
	{  
		employeeRepository.save(employee);  
	}  
	//deleting a specific record  
	public void delete(Integer id)   
	{  
		employeeRepository.deleteById(id);  
	}
	
	public List<Employee> search(String name) {
		List<Employee> employees = new ArrayList<Employee>();  
		employees = employeeRepository.findByName(name);  
		return employees;
	}  
}
