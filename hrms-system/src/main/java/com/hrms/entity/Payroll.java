package com.hrms.entity;

import jakarta.persistence.*;

import lombok.*;

@Entity
@Table(name = "payrolls")

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class Payroll {

    @Id
    @GeneratedValue(
            strategy =
            GenerationType.IDENTITY)

    private Long id;

    @ManyToOne

    @JoinColumn(
            name = "employee_id")

    private Employee employee;

    private Double basicSalary;

    private Double bonus;

    private Double deduction;

    private Double netSalary;

    private String salaryMonth;
}