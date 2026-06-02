package com.hrms.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.hrms.dto.request.EmployeeRequest;
import com.hrms.entity.Employee;

public interface EmployeeService {

    Employee addEmployee(
            EmployeeRequest request);

    Page<Employee> getAllEmployees(
        int page,
        int size,
        String sortBy);

    Employee getEmployeeById(
            Long id);

    Employee updateEmployee(
            Long id,
            EmployeeRequest request);

    String deleteEmployee(
            Long id);

    List<Employee> searchEmployees(
            String firstName);
}