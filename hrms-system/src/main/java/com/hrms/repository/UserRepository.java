package com.hrms.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hrms.entity.User;

@Repository

public interface UserRepository
        extends JpaRepository<User, Long> {

    /* FIND USERNAME */

    Optional<User> findByUsername(
            String username
    );

    /* FIND EMAIL */

    Optional<User> findByEmail(
            String email
    );

    /* EXISTS USERNAME */

    boolean existsByUsername(
            String username
    );

    /* EXISTS EMAIL */

    boolean existsByEmail(
            String email
    );
}