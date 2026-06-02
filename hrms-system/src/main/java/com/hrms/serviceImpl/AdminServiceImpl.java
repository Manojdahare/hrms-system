package com.hrms.serviceImpl;

import org.springframework.stereotype.Service;

import com.hrms.dto.response.AdminDashboardResponse;

import com.hrms.repository.EmployeeRepository;
import com.hrms.repository.LeaveRepository;
import com.hrms.repository.PayrollRepository;

import com.hrms.service.AdminService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor

public class AdminServiceImpl
        implements AdminService {

    private final EmployeeRepository
            employeeRepository;

    private final LeaveRepository
            leaveRepository;

    private final PayrollRepository
            payrollRepository;

    @Override
    public AdminDashboardResponse
    getDashboardData() {

        Long totalEmployees =

                employeeRepository.count();

        Long totalLeaves =

                leaveRepository.count();

        Double payrollCost =

                payrollRepository.findAll()

                        .stream()

                        .mapToDouble(
                                payroll -> payroll.getNetSalary()
                        )

                        .sum();

        Double attendanceRate = 92.0;

        return AdminDashboardResponse

                .builder()

                .totalEmployees(
                        totalEmployees)

                .totalLeaves(
                        totalLeaves)

                .payrollCost(
                        payrollCost)

                .attendanceRate(
                        attendanceRate)

                .build();
    }
}