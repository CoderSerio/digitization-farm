package com.bbqd.farm.mapper;

import com.bbqd.farm.model.FarmDetail;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface FarmDetailMapper {
    int deleteByPrimaryKey(String farmName);

    int insert(FarmDetail row);

    int insertSelective(FarmDetail row);

    FarmDetail selectByPrimaryKey(String farmName);

    FarmDetail searchAllByDateAndPrimaryKey(@Param("farmName") String farmName, @Param("date") Long date);

    int updateByPrimaryKeySelective(FarmDetail row);

    int updateByPrimaryKey(FarmDetail row);
}