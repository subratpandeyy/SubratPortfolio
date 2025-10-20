package com.portfolio.Portfolio.Service;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import net.coobird.thumbnailator.Thumbnails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayOutputStream;
import java.util.Map;

@Service
public class CloudinaryService {

    @Autowired
    private Cloudinary cloudinary;

    public String uploadFile(MultipartFile file) {
        try {
            System.out.println("📸 Uploading file: " + file.getOriginalFilename());
            System.out.println("📏 File size: " + file.getSize() + " bytes");

            if (file.isEmpty()) {
                throw new RuntimeException("File is empty — nothing to upload.");
            }

            // Step 1: Compress image
            ByteArrayOutputStream compressedOutputStream = new ByteArrayOutputStream();
            Thumbnails.of(file.getInputStream())
                    .size(1280, 720)
                    .outputQuality(0.7)
                    .toOutputStream(compressedOutputStream);

            byte[] compressedBytes = compressedOutputStream.toByteArray();
            System.out.println("✅ Compression complete. Compressed size: " + compressedBytes.length + " bytes");

            // Step 2: Upload to Cloudinary
            Map<String, Object> uploadResult = cloudinary.uploader().upload(
                    compressedBytes,
                    ObjectUtils.asMap("resource_type", "auto")
            );

            System.out.println("✅ Upload successful: " + uploadResult.get("secure_url"));
            return uploadResult.get("secure_url").toString();

        } catch (Exception e) {
            System.err.println("❌ Image upload failed:");
            e.printStackTrace();
            throw new RuntimeException("Image upload failed: " + e.getMessage());
        }
    }
}
