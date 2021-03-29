package com.example.controller;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.Employee;
import com.example.service.EmployeeService;

import org.springframework.beans.factory.annotation.Autowired;

@RestController
@RequestMapping(value = "/api/employee")
@CrossOrigin(origins = "*")
public class EmployeeController {	
	
@Autowired
private EmployeeService employeeService;

@RequestMapping(method = RequestMethod.GET)
public List<Employee> getEmployees() {
	return employeeService.getAllEmployee();
}
@RequestMapping(value = "/{id}", method = RequestMethod.GET)
public Employee getEmployee(@PathVariable("id") Integer id) {
	return employeeService.getEmployeeById(id);
}
@RequestMapping(method = RequestMethod.POST)
public Integer saveEmployee(@RequestBody Employee emp) {
	employeeService.saveOrUpdate(emp);
	return emp.getId();
}
@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
public Integer editEmployee(@PathVariable Integer id, @RequestBody Employee emp) {
	employeeService.saveOrUpdate(emp);
	return emp.getId();
}
@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
public void deleteEmployee(@PathVariable Integer id) {
	employeeService.delete(id);
}

@RequestMapping(value = "/search", method = RequestMethod.GET) 
public List<Employee> getFilteredData(@RequestParam String name) {  
    return employeeService.search(name);  
}  
}