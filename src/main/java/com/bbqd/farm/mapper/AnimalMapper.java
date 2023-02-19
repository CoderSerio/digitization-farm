package com.bbqd.farm.mapper;

import com.bbqd.farm.model.Animal;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface AnimalMapper {
    int deleteByPrimaryKey(Long animalId);

    int insert(Animal row);

    int insertSelective(Animal row);

    Animal selectByPrimaryKey(Long animalId);

    List<Animal> selectAll();

    int updateByPrimaryKeySelective(Animal row);

    int updateByPrimaryKey(Animal row);
}