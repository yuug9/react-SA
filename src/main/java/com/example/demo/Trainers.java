package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Trainers {

	private @Id @GeneratedValue Long id;
	private String name;
    private String _id;
	private Trainers() {}

	public Trainers(String name, String _id) {
		this.name = name;
	    this._id=_id;
	}
}