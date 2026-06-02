package com.hrms.dto.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder

public class AdminDashboardResponse {

    private Long totalEmployees;

    private Long totalLeaves;

    private Double payrollCost;

    private Double attendanceRate;
}