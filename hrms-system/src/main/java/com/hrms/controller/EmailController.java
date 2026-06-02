package com.hrms.controller;

import com.hrms.service.EmailService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/email")

@RequiredArgsConstructor

public class EmailController {

    private final EmailService emailService;

    @PostMapping("/send")

    public ResponseEntity<String>
    sendEmail(

            @RequestParam String to,

            @RequestParam String subject,

            @RequestParam String body) {

        emailService.sendEmail(
                to,
                subject,
                body);

        return ResponseEntity.ok(
                "Email Sent Successfully");
    }
}