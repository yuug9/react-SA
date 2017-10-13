package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final TrainerRepository trainerRepository;

    @Autowired
    public DatabaseLoader(TrainerRepository repository) {
        this.trainerRepository = repository;
    }

	@Override
	public void run(String... strings) throws Exception {
		this.trainerRepository.save(new Trainer("ฟุตบอล"));
		this.trainerRepository.save(new Trainer("บาสเกตบอล"));


	}
}