package com.hrms.controller;

import java.time.LocalDateTime;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hrms.dto.response.ApiResponse;
import com.hrms.dto.response.DashboardResponse;
import com.hrms.service.DashboardService;

import lombok.RequiredArgsConstructor;

@RestController

@RequestMapping("/api/dashboard")

@RequiredArgsConstructor

public class DashboardController {

    private final DashboardService
            dashboardService;

    @GetMapping

    public ResponseEntity<ApiResponse<DashboardResponse>>
    getDashboardData() {

        DashboardResponse dashboardData =

                dashboardService
                        .getDashboardData();

        ApiResponse<DashboardResponse>
                response =

                ApiResponse.<DashboardResponse>
                        builder()

                        .success(true)

                        .message(
                                "Dashboard Data Fetched Successfully")

                        .data(
                                dashboardData)

                        .timestamp(
                                LocalDateTime.now())

                        .build();

        return ResponseEntity.ok(
                response);
    }
}