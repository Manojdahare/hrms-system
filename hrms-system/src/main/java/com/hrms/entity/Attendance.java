package com.hrms.entity;


import java.time.LocalDate;
import java.time.LocalDateTime;
import com.hrms.audit.BaseEntity;

import com.hrms.enums.AttendanceStatus;

import jakarta.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "attendance")

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class Attendance extends BaseEntity {

    @Id

    @GeneratedValue(
            strategy =
                    GenerationType.IDENTITY)

    private Long id;

    @ManyToOne

    @JoinColumn(name = "employee_id")

    private Employee employee;

    private LocalDate attendanceDate;

    private LocalDateTime checkInTime;

    private LocalDateTime checkOutTime;

    @Enumerated(EnumType.STRING)

    private AttendanceStatus status;
}