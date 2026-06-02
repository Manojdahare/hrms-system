package com.hrms.entity;

import java.time.LocalDate;

import com.hrms.audit.BaseEntity;
import com.hrms.enums.EmployeeStatus;

import jakarta.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "employees")

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class Employee extends BaseEntity {

    @Id

    @GeneratedValue(
            strategy =
                    GenerationType.IDENTITY)

    private Long id;

    @Column(unique = true)

    private String employeeCode;

    private String firstName;

    private String lastName;

    @Column(unique = true)

    private String email;

    private String phone;

    private String department;

    private String designation;

    private Double salary;

    private LocalDate joiningDate;

    @Enumerated(EnumType.STRING)

    private EmployeeStatus status;
}