package com.portfolio.Portfolio.Repository;

import com.portfolio.Portfolio.Model.Blog;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BlogRepository extends JpaRepository<Blog, Long> {
}
