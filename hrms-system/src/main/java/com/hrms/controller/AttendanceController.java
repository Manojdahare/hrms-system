package com.hrms.controller;

import com.hrms.entity.Attendance;

import com.hrms.service.AttendanceService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/attendance")

@RequiredArgsConstructor

public class AttendanceController {

    private final AttendanceService
            attendanceService;

    @PostMapping("/checkin/{employeeId}")

    public ResponseEntity<Attendance>
    checkIn(
            @PathVariable Long employeeId) {

        return ResponseEntity.ok(
                attendanceService
                        .checkIn(employeeId));
    }

    @PostMapping("/checkout/{employeeId}")

    public ResponseEntity<Attendance>
    checkOut(
            @PathVariable Long employeeId) {

        return ResponseEntity.ok(
                attendanceService
                        .checkOut(employeeId));
    }

    @GetMapping

    public ResponseEntity<List<Attendance>>
    getAllAttendance() {

        return ResponseEntity.ok(
                attendanceService
                        .getAllAttendance());
    }
}