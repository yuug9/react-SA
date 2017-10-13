package com.example.demo;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
public class Trainer {

    private @Id @GeneratedValue Long id;
    private String trainerName;


    private Trainer() {}

    public Trainer(String trainerName) {
        this.trainerName = trainerName;
    }
}
