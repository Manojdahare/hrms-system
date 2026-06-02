package com.hrms.controller;

import java.time.LocalDateTime;

import java.util.Map;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import com.hrms.dto.request.LoginRequest;
import com.hrms.dto.request.RegisterRequest;

import com.hrms.dto.response.ApiResponse;
import com.hrms.dto.response.AuthResponse;

import com.hrms.service.AuthService;

import jakarta.validation.Valid;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin("*")

public class AuthController {

    private final AuthService
            authService;

    /* REGISTER */

    @PostMapping("/register")

    public ResponseEntity<ApiResponse<String>> register(

            @Valid
            @RequestBody
            RegisterRequest request) {

        String response =
                authService.register(request);

        ApiResponse<String> apiResponse =

                ApiResponse.<String>builder()

                        .success(true)

                        .message("User Registered Successfully")

                        .data(response)

                        .timestamp(LocalDateTime.now())

                        .build();

        return ResponseEntity.ok(apiResponse);
    }

    /* LOGIN */

    @PostMapping("/login")

    public ResponseEntity<ApiResponse<AuthResponse>> login(

            @Valid
            @RequestBody
            LoginRequest request) {

        AuthResponse response =
                authService.login(request);

        ApiResponse<AuthResponse> apiResponse =

                ApiResponse.<AuthResponse>builder()

                        .success(true)

                        .message("Login Successful")

                        .data(response)

                        .timestamp(LocalDateTime.now())

                        .build();

        return ResponseEntity.ok(apiResponse);
    }

    /* FORGOT PASSWORD */

    @PostMapping("/forgot-password")

    public ResponseEntity<ApiResponse<String>> forgotPassword(

            @RequestBody
            Map<String, String> request) {

        String email =
                request.get("email");

        String response =

                authService.forgotPassword(
                        email
                );

        ApiResponse<String> apiResponse =

                ApiResponse.<String>builder()

                        .success(true)

                        .message(response)

                        .data(response)

                        .timestamp(LocalDateTime.now())

                        .build();

        return ResponseEntity.ok(apiResponse);
    }

    /* RESET PASSWORD */

    @PostMapping("/reset-password")

    public ResponseEntity<ApiResponse<String>> resetPassword(

            @RequestBody
            Map<String, String> request) {

        String token =
                request.get("token");

        String password =
                request.get("password");

        String response =

                authService.resetPassword(
                        token,
                        password
                );

        ApiResponse<String> apiResponse =

                ApiResponse.<String>builder()

                        .success(true)

                        .message(response)

                        .data(response)

                        .timestamp(LocalDateTime.now())

                        .build();

        return ResponseEntity.ok(apiResponse);
    }
}