package com.example.demo;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.OneToOne;
import java.util.Date;


@Data
@Entity

public class TrainerBook {

    private @Id
    @GeneratedValue
    Long id;
    @OneToOne
    private String TrainerBook;
    private Date date;

    private TrainerBook() {}

    public TrainerBook(String TrainerBook, Date date) {
        this.TrainerBook = TrainerBook;
        this.date = date;
    }


}
