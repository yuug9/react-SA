package com.example.demo;

import lombok.Data;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity

public class Member {
    private @Id @GeneratedValue Long id;
    private String memberName;


    private Member() {}

    public Member(String memberName, String memberID) {
        this.memberName = memberName;

    }
}
