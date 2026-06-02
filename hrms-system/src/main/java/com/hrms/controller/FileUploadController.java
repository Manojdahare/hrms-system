package com.hrms.controller;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

@RestController
@RequestMapping("/api/files")

public class FileUploadController {

    private static final String
            UPLOAD_DIR = "uploads/";

    @PostMapping("/upload")

    public ResponseEntity<String>
    uploadFile(

            @RequestParam("file")
            MultipartFile file)

            throws IOException {

        if (file.isEmpty()) {

            return ResponseEntity.badRequest()
                    .body("File is empty");
        }

        File uploadDir =
                new File(UPLOAD_DIR);

        if (!uploadDir.exists()) {

            uploadDir.mkdirs();
        }

        String filePath =
                UPLOAD_DIR
                        + file.getOriginalFilename();

        file.transferTo(new File(filePath));

        return ResponseEntity.ok(
                "File uploaded successfully: "
                        + file.getOriginalFilename());
    }
}