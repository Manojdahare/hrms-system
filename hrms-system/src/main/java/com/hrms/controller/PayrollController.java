package com.hrms.controller;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;

import org.springframework.core.io.InputStreamResource;

import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import com.itextpdf.text.*;
import com.itextpdf.text.pdf.PdfWriter;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.hrms.dto.request.PayrollRequest;
import com.hrms.entity.Employee;
import com.hrms.entity.Payroll;
import com.hrms.repository.EmployeeRepository;
import com.hrms.repository.PayrollRepository;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/payroll")

@RequiredArgsConstructor

@CrossOrigin(origins = "*")

public class PayrollController {

    private final PayrollRepository
            payrollRepository;

    private final EmployeeRepository
            employeeRepository;

    @GetMapping
    public List<Payroll>
    getAllPayrolls() {

        return payrollRepository.findAll();
    }

    @PostMapping
    public Payroll addPayroll(

            @RequestBody
            PayrollRequest request) {

        Employee employee =

                employeeRepository

                        .findById(
                                request.getEmployeeId())

                        .orElseThrow(() ->

                                new RuntimeException(
                                        "Employee Not Found"));

        Double netSalary =

                request.getBasicSalary()

                        + request.getBonus()

                        - request.getDeduction();

        Payroll payroll =

                Payroll.builder()

                        .employee(employee)

                        .basicSalary(
                                request.getBasicSalary())

                        .bonus(
                                request.getBonus())

                        .deduction(
                                request.getDeduction())

                        .netSalary(
                                netSalary)

                        .salaryMonth(
                                request.getSalaryMonth())

                        .build();

        return payrollRepository.save(
                payroll);
    }

    @GetMapping("/slip/{id}")

    public ResponseEntity<InputStreamResource>

    downloadSalarySlip(

            @PathVariable
            Long id) {

        Payroll payroll =

                payrollRepository

                        .findById(id)

                        .orElseThrow(() ->

                                new RuntimeException(
                                        "Payroll Not Found"));

        try {

            Document document =
                    new Document();

            ByteArrayOutputStream out =
                    new ByteArrayOutputStream();

            PdfWriter.getInstance(
                    document,
                    out);

            document.open();

            Font titleFont =

                    FontFactory.getFont(
                            FontFactory.HELVETICA_BOLD,
                            22);

            Paragraph title =

                    new Paragraph(
                            "HRMS Salary Slip",
                            titleFont);

            title.setAlignment(
                    Element.ALIGN_CENTER);

            document.add(title);

            document.add(
                    new Paragraph(" ")
            );

            document.add(

                    new Paragraph(

                            "Employee: "

                                    + payroll
                                    .getEmployee()
                                    .getFirstName()

                                    + " "

                                    + payroll
                                    .getEmployee()
                                    .getLastName()
                    )
            );

            document.add(

                    new Paragraph(

                            "Department: "

                                    + payroll
                                    .getEmployee()
                                    .getDepartment()
                    )
            );

            document.add(

                    new Paragraph(

                            "Designation: "

                                    + payroll
                                    .getEmployee()
                                    .getDesignation()
                    )
            );

            document.add(

                    new Paragraph(

                            "Salary Month: "

                                    + payroll
                                    .getSalaryMonth()
                    )
            );

            document.add(
                    new Paragraph(" ")
            );

            document.add(

                    new Paragraph(

                            "Basic Salary: ₹"

                                    + payroll
                                    .getBasicSalary()
                    )
            );

            document.add(

                    new Paragraph(

                            "Bonus: ₹"

                                    + payroll
                                    .getBonus()
                    )
            );

            document.add(

                    new Paragraph(

                            "Deduction: ₹"

                                    + payroll
                                    .getDeduction()
                    )
            );

            document.add(

                    new Paragraph(

                            "Net Salary: ₹"

                                    + payroll
                                    .getNetSalary()
                    )
            );

            document.close();

            ByteArrayInputStream bis =

                    new ByteArrayInputStream(
                            out.toByteArray());

            HttpHeaders headers =
                    new HttpHeaders();

            headers.add(

                    "Content-Disposition",

                    "inline; filename=salary-slip.pdf"
            );

            return ResponseEntity.ok()

                    .headers(headers)

                    .contentType(
                            MediaType.APPLICATION_PDF)

                    .body(
                            new InputStreamResource(
                                    bis));
        }

        catch (Exception e) {

            throw new RuntimeException(
                    "PDF Error");
        }
    }
}