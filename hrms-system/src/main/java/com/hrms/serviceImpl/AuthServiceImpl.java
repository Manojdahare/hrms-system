package com.hrms.serviceImpl;

import java.time.LocalDateTime;

import java.util.UUID;

import org.springframework.security.crypto.password.PasswordEncoder;

import org.springframework.stereotype.Service;

import com.hrms.dto.request.LoginRequest;
import com.hrms.dto.request.RegisterRequest;

import com.hrms.dto.response.AuthResponse;

import com.hrms.entity.User;

import com.hrms.enums.RoleType;

import com.hrms.repository.UserRepository;

import com.hrms.security.JwtUtil;

import com.hrms.service.AuthService;

import com.hrms.service.EmailService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor

public class AuthServiceImpl
        implements AuthService {

    private final UserRepository
            userRepository;

    private final PasswordEncoder
            passwordEncoder;

    private final JwtUtil
            jwtUtil;

    private final EmailService
            emailService;

    /* REGISTER */

    @Override

    public String register(
            RegisterRequest request) {

        if (userRepository.existsByUsername(
                request.getUsername())) {

            return "Username already exists";
        }

        if (userRepository.existsByEmail(
                request.getEmail())) {

            return "Email already exists";
        }

        User user = User.builder()

                .fullName(
                        request.getFullName())

                .username(
                        request.getUsername())

                .email(
                        request.getEmail())

                .password(
                        passwordEncoder.encode(
                                request.getPassword()))

                .role(
                        RoleType.valueOf(
                                request.getRole()
                                        .toUpperCase()))

                .enabled(true)

                .build();

        userRepository.save(user);

        return "User Registered Successfully";
    }

    /* LOGIN */

    @Override

    public AuthResponse login(
            LoginRequest request) {

        User user =

                userRepository

                        .findByUsername(
                                request.getUsername())

                        .orElseThrow(() ->

                                new RuntimeException(
                                        "Invalid Username"
                                ));

        if (!passwordEncoder.matches(

                request.getPassword(),

                user.getPassword())) {

            throw new RuntimeException(
                    "Invalid Password"
            );
        }

        String token =

                jwtUtil.generateToken(
                        user.getUsername()
                );

        return AuthResponse.builder()

                .message(
                        "Login Successful")

                .username(
                        user.getUsername())

                .role(
                        user.getRole())

                .token(
                        token)

                .build();
    }

    /* FORGOT PASSWORD */

    @Override

    public String forgotPassword(
            String email) {

        User user =

                userRepository

                        .findByEmail(email)

                        .orElseThrow(() ->

                                new RuntimeException(
                                        "Email Not Found"
                                ));

        /* TOKEN */

        String resetToken =

                UUID.randomUUID()
                        .toString();

        user.setResetToken(
                resetToken
        );

        user.setResetTokenExpiry(

                LocalDateTime.now()
                        .plusMinutes(15)
        );

        userRepository.save(user);

        /* RESET LINK */

        String resetLink =

        "http://192.168.1.5:5173/reset-password?token="

                + resetToken;

        /* EMAIL */

        String subject =
                "HRMS Password Reset";

        String body =

                "Hello "
                        + user.getFullName()

                        + ",\n\n"

                        + "Click the link below to reset your HRMS account password:\n\n"

                        + resetLink

                        + "\n\n"

                        + "This link will expire in 15 minutes.\n\n"

                        + "HRMS Enterprise Team";

        emailService.sendEmail(

                user.getEmail(),

                subject,

                body
        );

        return "Password Reset Link Sent Successfully";
    }

    /* RESET PASSWORD */

    @Override

    public String resetPassword(

            String token,

            String password
    ) {

        User user =

                userRepository

                        .findAll()

                        .stream()

                        .filter(u ->

                                token.equals(
                                        u.getResetToken()
                                )
                        )

                        .findFirst()

                        .orElseThrow(() ->

                                new RuntimeException(
                                        "Invalid Reset Token"
                                ));

        /* EXPIRED */

        if (

                user.getResetTokenExpiry()

                        .isBefore(
                                LocalDateTime.now()
                        )

        ) {

            throw new RuntimeException(
                    "Reset Token Expired"
            );
        }

        /* UPDATE PASSWORD */

        user.setPassword(

                passwordEncoder.encode(
                        password
                )
        );

        /* CLEAR TOKEN */

        user.setResetToken(null);

        user.setResetTokenExpiry(null);

        userRepository.save(user);

        return "Password Reset Successful";
    }
}