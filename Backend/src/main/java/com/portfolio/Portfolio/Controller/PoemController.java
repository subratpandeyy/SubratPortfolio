package com.portfolio.Portfolio.Controller;

import com.portfolio.Portfolio.Model.Poem;
import com.portfolio.Portfolio.Service.PoemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class PoemController {
    @Autowired
    private PoemService poemService;

    @GetMapping("/poems")
    public ResponseEntity<List<Poem>> getAllPoems() {
        return new ResponseEntity<>(poemService.getAllPoems(), HttpStatus.OK);
    }

    @PostMapping("/poems")
    public ResponseEntity<Poem> createPoem(@RequestBody Poem poem) {
        return new ResponseEntity<>(poemService.createPoem(poem), HttpStatus.OK);
    }
}
