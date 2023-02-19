package com.bbqd.farm.mapper;

import com.bbqd.farm.model.FeedLog;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface FeedLogMapper {
    int deleteByPrimaryKey(Long feedLogId);

    int insert(FeedLog row);

    int insertSelective(FeedLog row);

    FeedLog selectByPrimaryKey(Long feedLogId);

    FeedLog selectByPrimaryKeyAndDate(@Param("feedLogId") Long feedLogId, @Param("date") Long date);

    int updateByPrimaryKeySelective(FeedLog row);

    int updateByPrimaryKey(FeedLog row);
}