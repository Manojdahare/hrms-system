package com.hrms.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hrms.entity.Payroll;

public interface PayrollRepository

        extends JpaRepository<
        Payroll,
        Long> {

}