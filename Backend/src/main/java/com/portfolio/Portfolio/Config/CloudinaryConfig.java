package com.portfolio.Portfolio.Config;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CloudinaryConfig {

    @Bean
    public Cloudinary cloudinary() {
        return new Cloudinary(ObjectUtils.asMap(
                "cloud_name", "dad8dnpev",
                "api_key", "566287954292653",
                "api_secret", "tL0Ix4DsNPnl_Y7beVZMc_1Mdjc"
        ));
    }
}
