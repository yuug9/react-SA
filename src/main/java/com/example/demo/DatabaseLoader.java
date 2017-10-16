package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final ChooseTrainerRepository chooseTrainerRepository;
	private final TrainersRepository trainersRepository;
	private final EmployeeRepository employeeRepository;
	private final MemberRepository memberRepository;

    @Autowired
    public DatabaseLoader(ChooseTrainerRepository chooseTrainerRepository,TrainersRepository trainersRepository,EmployeeRepository employeeRepository,MemberRepository memberRepository) {
        this.chooseTrainerRepository = chooseTrainerRepository;
		this.trainersRepository =trainersRepository;
		this.employeeRepository=employeeRepository;
		this.memberRepository =memberRepository;
    }

	@Override
	public void run(String... strings) throws Exception {
		this.chooseTrainerRepository.save(new ChooseTrainer("สมพร","10-10-17","13:00-15.00","ฟุตบอล","เเมสชี"));
		this.trainersRepository.save(new Trainers("เเมสชี","t101"));
		this.employeeRepository.save(new Employee("สมพร","e101"));
		this.memberRepository.save(new Member("สมศรี","m101"));
	}
}