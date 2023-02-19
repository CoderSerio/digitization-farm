package com.bbqd.farm.model;

import java.io.Serializable;

public class FeedLog implements Serializable {
    private Long feedLogId;

    private Long date;

    private String feedType;

    private Integer dailyUse;

    private static final long serialVersionUID = 1L;

    public Long getFeedLogId() {
        return feedLogId;
    }

    public void setFeedLogId(Long feedLogId) {
        this.feedLogId = feedLogId;
    }

    public Long getDate() {
        return date;
    }

    public void setDate(Long date) {
        this.date = date;
    }

    public String getFeedType() {
        return feedType;
    }

    public void setFeedType(String feedType) {
        this.feedType = feedType;
    }

    public Integer getDailyUse() {
        return dailyUse;
    }

    public void setDailyUse(Integer dailyUse) {
        this.dailyUse = dailyUse;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", feedLogId=").append(feedLogId);
        sb.append(", date=").append(date);
        sb.append(", feedType=").append(feedType);
        sb.append(", dailyUse=").append(dailyUse);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}