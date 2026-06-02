package com.hrms.entity;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import lombok.*;

@Entity
@Table(name = "leaves")

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class Leave {

    @Id
    @GeneratedValue(
            strategy =
            GenerationType.IDENTITY)

    private Long id;

    @ManyToOne

@JoinColumn(
        name = "employee_id")

@JsonIgnoreProperties({
    "hibernateLazyInitializer",
    "handler"
})

private Employee employee;

    private String leaveType;

    private String startDate;

    private String endDate;

    private String reason;

    private String status;
}