package com.hrms.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/hr")

public class HRController {

    @GetMapping("/dashboard")
    public String hrDashboard() {

        return "Welcome HR Dashboard";
    }
}