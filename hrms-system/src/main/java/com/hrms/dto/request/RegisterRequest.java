package com.hrms.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import lombok.Data;

@Data

public class RegisterRequest {

    @NotBlank(message = "Full Name is required")

    private String fullName;

    @NotBlank(message = "Username is required")

    private String username;

    @Email(message = "Invalid Email")

    @NotBlank(message = "Email is required")

    private String email;

    @Size(
            min = 4,

            message =
                    "Password must be at least 4 characters"
    )

    @NotBlank(message = "Password is required")

    private String password;

    @NotBlank(message = "Role is required")

    private String role;
}