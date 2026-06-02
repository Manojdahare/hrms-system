package com.hrms.controller;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Page;

import com.hrms.dto.request.EmployeeRequest;
import com.hrms.dto.response.ApiResponse;
import com.hrms.entity.Employee;
import com.hrms.service.EmployeeService;

import jakarta.validation.Valid;

import lombok.RequiredArgsConstructor;

@RestController

@RequestMapping("/api/employees")

@RequiredArgsConstructor

@CrossOrigin("*")

public class EmployeeController {

    private final EmployeeService
            employeeService;

    // ADD EMPLOYEE
    @PostMapping

    public ResponseEntity<ApiResponse<Employee>>
    addEmployee(

            @Valid
            @RequestBody
            EmployeeRequest request) {

        Employee employee =

                employeeService
                        .addEmployee(request);

        ApiResponse<Employee> response =

                ApiResponse.<Employee>builder()

                        .success(true)

                        .message(
                                "Employee Added Successfully")

                        .data(employee)

                        .timestamp(
                                LocalDateTime.now())

                        .build();

        return ResponseEntity.ok(
                response);
    }

    // GET ALL EMPLOYEES
  @GetMapping

public ResponseEntity<ApiResponse<Page<Employee>>>
getAllEmployees(

        @RequestParam(defaultValue = "0")
        int page,

        @RequestParam(defaultValue = "5")
        int size,

        @RequestParam(defaultValue = "id")
        String sortBy) {

    Page<Employee> employees =

            employeeService
                    .getAllEmployees(
                            page,
                            size,
                            sortBy);

    ApiResponse<Page<Employee>>
            response =

            ApiResponse.<Page<Employee>>
                    builder()

                    .success(true)

                    .message(
                            "Employees Fetched Successfully")

                    .data(employees)

                    .timestamp(
                            LocalDateTime.now())

                    .build();

    return ResponseEntity.ok(
            response);
}

    // GET EMPLOYEE BY ID       
    @GetMapping("/{id}")

    public ResponseEntity<ApiResponse<Employee>>
    getEmployeeById(

            @PathVariable Long id) {

        Employee employee =

                employeeService
                        .getEmployeeById(id);

        ApiResponse<Employee> response =

                ApiResponse.<Employee>builder()

                        .success(true)

                        .message(
                                "Employee Fetched Successfully")

                        .data(employee)

                        .timestamp(
                                LocalDateTime.now())

                        .build();

        return ResponseEntity.ok(
                response);
    }
    @PutMapping("/{id}")

public ResponseEntity<ApiResponse<Employee>>
updateEmployee(

        @PathVariable Long id,

        @Valid
        @RequestBody
        EmployeeRequest request) {

    Employee employee =

            employeeService
                    .updateEmployee(
                            id,
                            request);

    ApiResponse<Employee> response =

            ApiResponse.<Employee>
                    builder()

                    .success(true)

                    .message(
                            "Employee Updated Successfully")

                    .data(employee)

                    .timestamp(
                            LocalDateTime.now())

                    .build();

    return ResponseEntity.ok(
            response);
}
    // DELETE EMPLOYEE
    @DeleteMapping("/{id}")

    public ResponseEntity<ApiResponse<String>>
    deleteEmployee(

            @PathVariable Long id) {

        String message =

                employeeService
                        .deleteEmployee(id);

        ApiResponse<String> response =

                ApiResponse.<String>builder()

                        .success(true)

                        .message(message)

                        .data(message)

                        .timestamp(
                                LocalDateTime.now())

                        .build();

        return ResponseEntity.ok(
                response);
    }
    @GetMapping("/search")

public ResponseEntity<ApiResponse<List<Employee>>>
searchEmployees(

        @RequestParam String firstName) {

    List<Employee> employees =

            employeeService
                    .searchEmployees(
                            firstName);

    ApiResponse<List<Employee>>
            response =

            ApiResponse.<List<Employee>>
                    builder()

                    .success(true)

                    .message(
                            "Employees Search Successful")

                    .data(employees)

                    .timestamp(
                            LocalDateTime.now())

                    .build();

    return ResponseEntity.ok(
            response);
}
}