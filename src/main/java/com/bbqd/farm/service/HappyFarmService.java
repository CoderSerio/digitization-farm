package com.bbqd.farm.service;

import com.bbqd.farm.model.Animal;
import com.bbqd.farm.model.Stock;
import com.bbqd.farm.vo.AnimalDetail;

import java.util.List;

/**
 * @author yueyinghaibao
 */
public interface HappyFarmService {
    List<Animal> selectAll();

    AnimalDetail selectDetail(Long animalId, Long date);

    List<Stock> selectStock();
}
