package com.hrms.service;

import java.util.List;

import com.hrms.entity.Attendance;

public interface AttendanceService {

    Attendance checkIn(
            Long employeeId);

    Attendance checkOut(
            Long employeeId);

    List<Attendance> getAllAttendance();
}