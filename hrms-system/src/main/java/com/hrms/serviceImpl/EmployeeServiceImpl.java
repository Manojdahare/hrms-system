package com.hrms.serviceImpl;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.hrms.dto.request.EmployeeRequest;
import com.hrms.entity.Employee;
import com.hrms.repository.EmployeeRepository;
import com.hrms.service.EmployeeService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor

public class EmployeeServiceImpl
        implements EmployeeService {

    private final EmployeeRepository
            employeeRepository;

    @Override
    public Employee addEmployee(
            EmployeeRequest request) {

        if (employeeRepository
                .existsByEmployeeCode(
                        request.getEmployeeCode())) {

            throw new RuntimeException(
                    "Employee Code Already Exists");
        }

        if (employeeRepository
                .existsByEmail(
                        request.getEmail())) {

            throw new RuntimeException(
                    "Email Already Exists");
        }

        Employee employee =

                Employee.builder()

                        .employeeCode(
                                request.getEmployeeCode())

                        .firstName(
                                request.getFirstName())

                        .lastName(
                                request.getLastName())

                        .email(
                                request.getEmail())

                        .phone(
                                request.getPhone())

                        .department(
                                request.getDepartment())

                        .designation(
                                request.getDesignation())

                        .salary(
                                request.getSalary())

                        .joiningDate(
                                request.getJoiningDate())

                        .status(
                                request.getStatus())

                        .build();

        return employeeRepository
                .save(employee);
    }

   @Override
public Page<Employee>
getAllEmployees(
        int page,
        int size,
        String sortBy) {

    return employeeRepository.findAll(

            PageRequest.of(
                    page,
                    size,
                    Sort.by(sortBy)));
}

    @Override
    public Employee getEmployeeById(
            Long id) {

        return employeeRepository

                .findById(id)

                .orElseThrow(() ->

                        new RuntimeException(
                                "Employee Not Found"));
    }
    @Override
public Employee updateEmployee(
        Long id,
        EmployeeRequest request) {

    Employee employee =

            employeeRepository

                    .findById(id)

                    .orElseThrow(() ->

                            new RuntimeException(
                                    "Employee Not Found"));

    employee.setEmployeeCode(
            request.getEmployeeCode());

    employee.setFirstName(
            request.getFirstName());

    employee.setLastName(
            request.getLastName());

    employee.setEmail(
            request.getEmail());

    employee.setPhone(
            request.getPhone());

    employee.setDepartment(
            request.getDepartment());

    employee.setDesignation(
            request.getDesignation());

    employee.setSalary(
            request.getSalary());

    employee.setJoiningDate(
            request.getJoiningDate());

    employee.setStatus(
            request.getStatus());

    return employeeRepository
            .save(employee);
}
    @Override
    public String deleteEmployee(
            Long id) {

        Employee employee =

                employeeRepository

                        .findById(id)

                        .orElseThrow(() ->

                                new RuntimeException(
                                        "Employee Not Found"));

        employeeRepository.delete(
                employee);

        return "Employee Deleted Successfully";
    }

    @Override
    public List<Employee>
    searchEmployees(
            String firstName) {

        return employeeRepository

                .findByFirstNameContainingIgnoreCase(
                        firstName);
    }
}