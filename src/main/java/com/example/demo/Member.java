package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Member {

	private @Id @GeneratedValue Long id;
	private String name;
    private String _id;
	private Member() {}

	public Member(String name, String _id) {
		this.name = name;
	    this._id=_id;
	}
}