package com.portfolio.Portfolio.Repository;

import com.portfolio.Portfolio.Model.Poem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PoemRepository extends JpaRepository<Poem, Long> {
}
