package com.portfolio.Portfolio.Service;

import com.portfolio.Portfolio.Model.Poem;
import com.portfolio.Portfolio.Repository.PoemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PoemService {
    @Autowired
    PoemRepository repo;

    public List<Poem> getAllPoems() {
        return repo.findAll();
    }

    public Poem createPoem(Poem poem) {
        Poem poemOb = new Poem();
        poemOb.setTitle(poem.getTitle());
        poemOb.setContent(poem.getContent());
        return repo.save(poemOb);
    }
}
