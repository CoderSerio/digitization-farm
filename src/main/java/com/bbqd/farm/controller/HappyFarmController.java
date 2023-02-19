package com.bbqd.farm.controller;

import com.bbqd.farm.model.Stock;
import com.bbqd.farm.service.HappyFarmService;
import com.bbqd.farm.vo.AnimalDetail;
import com.bbqd.farm.vo.RespModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * @author yueyinghaibao
 */
@RestController
public class HappyFarmController {

    @Resource
    HappyFarmService happyFarmService;

    @GetMapping("/hello")
    public String sayHello() {
        return "hello";
    }

    @PostMapping("/selectAll")
    public RespModel selectAll() {
        return new RespModel(200, happyFarmService.selectAll(), "OK");
    }

    @PostMapping("/selectDetail")
    public RespModel selectDetail(Long animalId, Long date) {
        if(date == null) {
            date = Long.parseLong(new SimpleDateFormat("yyyyMMdd").format(new Date()));
        }
        try {
            AnimalDetail animalDetail = happyFarmService.selectDetail(animalId, date);
            return new RespModel(200, animalDetail, "OK");
        } catch (RuntimeException e) {
            return new RespModel(500, null, e.getMessage());
        }
    }

    @PostMapping("/selectStock")
    public RespModel selectStock() {
        return new RespModel(200, happyFarmService.selectStock(), "OK");
    }
}
