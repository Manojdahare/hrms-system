package com.hrms.entity;

import java.time.LocalDateTime;

import com.hrms.enums.RoleType;

import com.hrms.audit.BaseEntity;

import jakarta.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "users")

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class User extends BaseEntity {

    @Id

    @GeneratedValue(
            strategy =
                    GenerationType.IDENTITY)

    private Long id;

    private String fullName;

    @Column(unique = true)

    private String username;

    @Column(unique = true)

    private String email;

    private String password;

    @Enumerated(EnumType.STRING)

    private RoleType role;

    private boolean enabled;

    /* RESET TOKEN */

    private String resetToken;

    /* TOKEN EXPIRY */

    private LocalDateTime
            resetTokenExpiry;
}