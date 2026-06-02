package com.hrms.controller;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import com.hrms.dto.response.AdminDashboardResponse;

import com.hrms.service.AdminService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/admin")

@RequiredArgsConstructor

@CrossOrigin("*")

public class AdminController {

    private final AdminService
            adminService;

    @GetMapping("/dashboard")

    public ResponseEntity<AdminDashboardResponse>
    getDashboard() {

        return ResponseEntity.ok(

                adminService
                        .getDashboardData()
        );
    }
}