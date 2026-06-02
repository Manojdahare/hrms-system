package com.hrms.security;

import java.security.Key;
import java.util.Date;

import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import io.jsonwebtoken.security.Keys;

@Component

public class JwtUtil {

    /* SECRET KEY */

    private static final String SECRET =

            "mysecretkeymysecretkeymysecretkey123456";

    /* TOKEN EXPIRATION */

    private static final long EXPIRATION =

            1000 * 60 * 60 * 24;

    /* JWT KEY */

    private final Key key =

            Keys.hmacShaKeyFor(
                    SECRET.getBytes()
            );

    /* GENERATE TOKEN */

    public String generateToken(
            String username) {

        return Jwts.builder()

                .subject(username)

                .issuedAt(
                        new Date()
                )

                .expiration(

                        new Date(

                                System.currentTimeMillis()

                                        + EXPIRATION
                        )
                )

                .signWith(
                        key
                )

                .compact();
    }

    /* EXTRACT USERNAME */

    public String extractUsername(
            String token) {

        return extractClaims(token)

                .getSubject();
    }

    /* VALIDATE TOKEN */

    public boolean validateToken(
            String token) {

        try {

            return !extractClaims(token)

                    .getExpiration()

                    .before(new Date());

        } catch (Exception e) {

            return false;
        }
    }

    /* EXTRACT CLAIMS */

    private Claims extractClaims(
            String token) {

        return Jwts.parser()

                .verifyWith(
                        (javax.crypto.SecretKey) key
                )

                .build()

                .parseSignedClaims(token)

                .getPayload();
    }
}