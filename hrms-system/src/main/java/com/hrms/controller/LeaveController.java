package com.hrms.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.hrms.dto.request.LeaveRequest;
import com.hrms.entity.Employee;
import com.hrms.entity.Leave;
import com.hrms.repository.EmployeeRepository;
import com.hrms.repository.LeaveRepository;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/leave")

@RequiredArgsConstructor

@CrossOrigin(origins = "*")

public class LeaveController {

    private final LeaveRepository
            leaveRepository;

    private final EmployeeRepository
            employeeRepository;

    @GetMapping
    public List<Leave>
    getLeaves() {

        return leaveRepository.findAll();
    }

    @PostMapping
    public Leave applyLeave(

            @RequestBody
            LeaveRequest request) {

        Employee employee =

                employeeRepository

                        .findById(
                                request.getEmployeeId())

                        .orElseThrow(() ->

                                new RuntimeException(
                                        "Employee Not Found"));

        Leave leave =

                Leave.builder()

                        .employee(employee)

                        .leaveType(
                                request.getLeaveType())

                        .startDate(
                                request.getStartDate())

                        .endDate(
                                request.getEndDate())

                        .reason(
                                request.getReason())

                        .status(
                                "PENDING")

                        .build();

        return leaveRepository.save(
                leave);
    }

    @PutMapping("/approve/{id}")

    public Leave approveLeave(

            @PathVariable
            Long id) {

        Leave leave =

                leaveRepository

                        .findById(id)

                        .orElseThrow();

        leave.setStatus(
                "APPROVED"
        );

        return leaveRepository.save(
                leave);
    }

    @PutMapping("/reject/{id}")

    public Leave rejectLeave(

            @PathVariable
            Long id) {

        Leave leave =

                leaveRepository

                        .findById(id)

                        .orElseThrow();

        leave.setStatus(
                "REJECTED"
        );

        return leaveRepository.save(
                leave);
    }
}