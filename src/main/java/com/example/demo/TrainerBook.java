package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class TrainerBook {

	private @Id @GeneratedValue Long id;
	private String name;
	private String date;
    private String time;
    private String typeTraniner;
    private String traninerName;

	private TrainerBook() {}

	public TrainerBook(String name, String date,String time, String typeTraniner, String traninerName) {
		this.name = name;
		this.date = date;
        this.time = time;
        this.typeTraniner =typeTraniner;
        this.traninerName = traninerName;
	}
}