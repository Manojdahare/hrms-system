package com.hrms.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hrms.entity.Leave;

public interface LeaveRepository

        extends JpaRepository<
        Leave,
        Long> {

}