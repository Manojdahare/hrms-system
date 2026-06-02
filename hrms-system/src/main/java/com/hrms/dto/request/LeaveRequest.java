package com.hrms.dto.request;

import lombok.Data;

@Data

public class LeaveRequest {

    private Long employeeId;

    private String leaveType;

    private String startDate;

    private String endDate;

    private String reason;
}