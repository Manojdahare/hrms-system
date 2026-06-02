package com.hrms.service;

import com.hrms.dto.request.LoginRequest;

import com.hrms.dto.request.RegisterRequest;

import com.hrms.dto.response.AuthResponse;

public interface AuthService {

    /* REGISTER */

    String register(
            RegisterRequest request
    );

    /* LOGIN */

    AuthResponse login(
            LoginRequest request
    );

    /* FORGOT PASSWORD */

    String forgotPassword(
            String email
    );

    /* RESET PASSWORD */

    String resetPassword(

            String token,

            String password
    );
}