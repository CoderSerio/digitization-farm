package com.bbqd.farm.service;

import com.bbqd.farm.mapper.*;
import com.bbqd.farm.model.*;
import com.bbqd.farm.vo.AnimalDetail;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * @author yueyinghaibao
 */
@Service
public class HappyFarmServiceImpl implements HappyFarmService{

    @Resource
    AnimalMapper animalMapper;

    @Resource
    FarmDetailMapper farmDetailMapper;

    @Resource
    FeedLogMapper feedLogMapper;

    @Resource
    AntibioticMapper antibioticMapper;

    @Resource
    StockMapper stockMapper;

    @Override
    public List<Animal> selectAll() {
        return animalMapper.selectAll();
    }

    @Override
    public AnimalDetail selectDetail(Long animalId, Long date) throws RuntimeException{
        Animal animal = animalMapper.selectByPrimaryKey(animalId);
        if(animal == null) {
            throw new RuntimeException("查无此动物");
        }
        FarmDetail farmDetail = farmDetailMapper.searchAllByDateAndPrimaryKey(animal.getFarm(), date);
        FeedLog feedLog = feedLogMapper.selectByPrimaryKeyAndDate(animal.getFeedLogId(), date);
        Antibiotic antibiotic = antibioticMapper.selectBySpeciesAndGrowthStage(animal.getSpecies(), animal.getGrowthStage());
        return new AnimalDetail(animal, farmDetail, feedLog, antibiotic);
    }

    @Override
    public List<Stock> selectStock() {
        return stockMapper.selectAll();
    }
}
