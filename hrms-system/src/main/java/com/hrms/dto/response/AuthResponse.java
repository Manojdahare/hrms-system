package com.hrms.dto.response;

import com.hrms.enums.RoleType;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class AuthResponse {

    private String token;

    private String message;

    private String username;

    private RoleType role;
}