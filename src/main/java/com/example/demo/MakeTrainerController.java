package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.web.PagedResourcesAssembler;
import org.springframework.hateoas.PagedResources;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;
@Controller
public class MakeTrainerController {

    @Autowired
    ChooseTrainerRepository chooseTrainerRepository;
    @ResponseBody
    @RequestMapping(path = "/name/{name}/date/{date}/time/{time}/type/{typeTraniner}/trainer/{traninerName}", method = RequestMethod.GET)
    public String chooseTrainer(@PathVariable String name,@PathVariable String date,@PathVariable String time,@PathVariable String typeTraniner,@PathVariable String traninerName) {
        ChooseTrainer chooseTrainer = new ChooseTrainer(name,date,time,typeTraniner,traninerName);
        this.chooseTrainerRepository.save(chooseTrainer);
        return "{\"status\":\"Voted\"}";
    }
}