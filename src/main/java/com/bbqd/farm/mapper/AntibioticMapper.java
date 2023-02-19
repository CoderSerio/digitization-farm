package com.bbqd.farm.mapper;

import com.bbqd.farm.model.Antibiotic;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface AntibioticMapper {
    int deleteByPrimaryKey(Long antibioticId);

    int insert(Antibiotic row);

    int insertSelective(Antibiotic row);

    Antibiotic selectByPrimaryKey(Long antibioticId);

    Antibiotic selectBySpeciesAndGrowthStage(@Param("species") String species, @Param("growthStage") Byte growthStage);

    int updateByPrimaryKeySelective(Antibiotic row);

    int updateByPrimaryKey(Antibiotic row);
}