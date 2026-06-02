package com.hrms.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.MethodArgumentNotValidException;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

    // GENERAL EXCEPTION
    @ExceptionHandler(Exception.class)

    public ResponseEntity<Map<String, Object>>
    handleException(Exception ex) {

        Map<String, Object> error =
                new HashMap<>();

        error.put("message",
                ex.getMessage());

        error.put("status",
                HttpStatus.BAD_REQUEST.value());

        error.put("timestamp",
                LocalDateTime.now());

        return new ResponseEntity<>(
                error,
                HttpStatus.BAD_REQUEST);
    }

    // VALIDATION EXCEPTION
    @ExceptionHandler(
            MethodArgumentNotValidException.class)

    public ResponseEntity<Map<String, Object>>
    handleValidationException(
            MethodArgumentNotValidException ex) {

        Map<String, Object> errors =
                new HashMap<>();

        ex.getBindingResult()

                .getFieldErrors()

                .forEach(error ->

                        errors.put(
                                error.getField(),
                                error.getDefaultMessage()));

        return new ResponseEntity<>(
                errors,
                HttpStatus.BAD_REQUEST);
    }
}