package com.bbqd.farm.mapper;

import com.bbqd.farm.model.Stock;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface StockMapper {
    int deleteByPrimaryKey(String type);

    int insert(Stock row);

    int insertSelective(Stock row);

    Stock selectByPrimaryKey(String type);

    List<Stock> selectAll();

    int updateByPrimaryKeySelective(Stock row);

    int updateByPrimaryKey(Stock row);
}