package com.hrms.config;

import com.hrms.security.JwtFilter;

import lombok.RequiredArgsConstructor;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;

import org.springframework.security.config.http.SessionCreationPolicy;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import org.springframework.security.crypto.password.PasswordEncoder;

import org.springframework.security.web.SecurityFilterChain;

import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import org.springframework.web.cors.CorsConfiguration;

import org.springframework.web.cors.CorsConfigurationSource;

import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

@Configuration
@RequiredArgsConstructor

public class SecurityConfig {

        private final JwtFilter jwtFilter;

        @Bean
        public PasswordEncoder passwordEncoder() {

                return new BCryptPasswordEncoder();
        }

        @Bean
        public CorsConfigurationSource corsConfigurationSource() {

                CorsConfiguration configuration =

                                new CorsConfiguration();

                configuration.setAllowedOrigins(

                                List.of(
                                                "http://localhost:5173"));

                configuration.setAllowedMethods(

                                List.of(
                                                "GET",
                                                "POST",
                                                "PUT",
                                                "DELETE",
                                                "OPTIONS"));

                configuration.setAllowedHeaders(
                                List.of("*"));

                configuration.setAllowCredentials(
                                true);

                UrlBasedCorsConfigurationSource source =

                                new UrlBasedCorsConfigurationSource();

                source.registerCorsConfiguration(
                                "/**",
                                configuration);

                return source;
        }

        @Bean
        public SecurityFilterChain securityFilterChain(
                        HttpSecurity http)
                        throws Exception {

                http

                                .cors(cors -> {
                                })

                                .csrf(csrf -> csrf.disable())

                                .authorizeHttpRequests(auth -> auth

                                                // PUBLIC APIs
                                                .requestMatchers(

                                                                "/api/auth/**",

                                                                "/api/employees/**",

                                                                "/api/attendance/**",

                                                                "/api/payroll/**",

                                                                "/api/leave/**",

                                                                "/swagger-ui/**",

                                                                "/v3/api-docs/**"

                                                ).permitAll()

                                                // ADMIN APIs
                                                .requestMatchers(
                                                                "/api/admin/**")
                                                .hasRole("ADMIN")

                                                // HR APIs
                                                .requestMatchers(
                                                                "/api/hr/**")
                                                .hasAnyRole(
                                                                "HR",
                                                                "ADMIN")

                                                // EMPLOYEE APIs
                                                .requestMatchers(
                                                                "/api/employees/**")
                                                .hasAnyRole(
                                                                "EMPLOYEE",
                                                                "HR",
                                                                "ADMIN")

                                                .anyRequest()

                                                .authenticated())

                                .sessionManagement(session ->

                                session.sessionCreationPolicy(
                                                SessionCreationPolicy.STATELESS))

                                .addFilterBefore(

                                                jwtFilter,

                                                UsernamePasswordAuthenticationFilter.class);

                return http.build();
        }
}