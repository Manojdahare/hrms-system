package com.hrms.serviceImpl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.hrms.dto.response.DashboardResponse;
import com.hrms.entity.Employee;
import com.hrms.enums.EmployeeStatus;
import com.hrms.repository.EmployeeRepository;
import com.hrms.service.DashboardService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor

public class DashboardServiceImpl
        implements DashboardService {

    private final EmployeeRepository
            employeeRepository;

    @Override
    public DashboardResponse
    getDashboardData() {

        List<Employee> employees =

                employeeRepository
                        .findAll();

        long totalEmployees =
                employees.size();

        long activeEmployees =

                employees.stream()

                        .filter(employee ->

                                employee.getStatus()

                                        == EmployeeStatus.ACTIVE)

                        .count();

        long inactiveEmployees =

                employees.stream()

                        .filter(employee ->

                                employee.getStatus()

                                        == EmployeeStatus.INACTIVE)

                        .count();

        double totalSalary =

                employees.stream()

                        .mapToDouble(
                                Employee::getSalary)

                        .sum();

        return DashboardResponse
                .builder()

                .totalEmployees(
                        totalEmployees)

                .activeEmployees(
                        activeEmployees)

                .inactiveEmployees(
                        inactiveEmployees)

                .totalSalary(
                        totalSalary)

                .build();
    }
}