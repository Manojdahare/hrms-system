package com.hrms.serviceImpl;

import java.time.LocalDate;
import java.time.LocalDateTime;

import java.util.List;

import org.springframework.stereotype.Service;

import com.hrms.entity.Attendance;
import com.hrms.entity.Employee;

import com.hrms.enums.AttendanceStatus;

import com.hrms.repository.AttendanceRepository;
import com.hrms.repository.EmployeeRepository;

import com.hrms.service.AttendanceService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor

public class AttendanceServiceImpl
        implements AttendanceService {

    private final AttendanceRepository
            attendanceRepository;

    private final EmployeeRepository
            employeeRepository;

    @Override
    public Attendance checkIn(
            Long employeeId) {

        Employee employee =
                employeeRepository.findById(
                        employeeId)

                        .orElseThrow(() ->

                                new RuntimeException(
                                        "Employee Not Found"));

        Attendance attendance =
                new Attendance();

        attendance.setEmployee(
                employee);

        attendance.setAttendanceDate(
                LocalDate.now());

        attendance.setCheckInTime(
                LocalDateTime.now());

        attendance.setStatus(
                AttendanceStatus.PRESENT);

        return attendanceRepository.save(
                attendance);
    }

    @Override
    public Attendance checkOut(
            Long employeeId) {

        Attendance attendance =
                attendanceRepository

                        .findTopByEmployeeIdOrderByIdDesc(
                                employeeId)

                        .orElseThrow(() ->

                                new RuntimeException(
                                        "Attendance Not Found"));

        attendance.setCheckOutTime(
                LocalDateTime.now());

        return attendanceRepository.save(
                attendance);
    }

    @Override
    public List<Attendance> getAllAttendance() {

        return attendanceRepository.findAll();
    }
}