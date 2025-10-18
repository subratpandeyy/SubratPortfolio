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
            // 1️⃣ Compress image
            ByteArrayOutputStream compressedOutputStream = new ByteArrayOutputStream();
            Thumbnails.of(file.getInputStream())
                    .size(1280, 720)
                    .outputQuality(0.7)
                    .toOutputStream(compressedOutputStream);

            byte[] compressedBytes = compressedOutputStream.toByteArray();

            // 2️⃣ Upload to Cloudinary
            Map<String, Object> uploadResult = cloudinary.uploader().upload(
                    compressedBytes,
                    ObjectUtils.emptyMap()
            );

            return uploadResult.get("secure_url").toString();

        } catch (Exception e) {
            throw new RuntimeException("Image upload failed: " + e.getMessage());
        }
    }
}
