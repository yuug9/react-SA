package com.example.demo;

import lombok.Data;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
public class Employee {
    private @Id @GeneratedValue Long id;
    private String employeeName;
    private Employee() {}
    public Employee(String employeeName, String employeeID) {
        this.employeeName = employeeName;
    }

}
