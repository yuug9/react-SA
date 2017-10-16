package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final TrainerBookRepository trainerBookRepository;
	private final TrainersRepository trainersRepository;
	private final EmployeeRepository employeeRepository;
	private final MemberRepository memberRepository;

    @Autowired
    public DatabaseLoader(TrainerBookRepository trainerBookRepository,TrainersRepository trainersRepository,EmployeeRepository employeeRepository,MemberRepository memberRepository) {
        this.trainerBookRepository = trainerBookRepository;
		this.trainersRepository =trainersRepository;
		this.employeeRepository=employeeRepository;
		this.memberRepository =memberRepository;
    }

	@Override
	public void run(String... strings) throws Exception {
		this.trainerBookRepository.save(new TrainerBook("สมพร","10-10-17","13:00-15.00","ฟุตบอล","เเมสชี"));
		this.trainersRepository.save(new Trainers("เเมสชี","t101"));
		this.employeeRepository.save(new Employee("สมพร","e101"));
		this.memberRepository.save(new Member("สมศรี","m101"));
	}
}