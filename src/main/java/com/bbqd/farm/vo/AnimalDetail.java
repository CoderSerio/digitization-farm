package com.bbqd.farm.vo;

import com.bbqd.farm.model.Animal;
import com.bbqd.farm.model.Antibiotic;
import com.bbqd.farm.model.FarmDetail;
import com.bbqd.farm.model.FeedLog;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

/**
 * @author yueyinghaibao
 */
@NoArgsConstructor
@AllArgsConstructor
public class AnimalDetail {
    private Animal animal;
    private FarmDetail farmDetail;
    private FeedLog feedLog;
    private Antibiotic antibiotic;

    public Animal getAnimal() {
        return animal;
    }

    public void setAnimal(Animal animal) {
        this.animal = animal;
    }

    public FarmDetail getFarm() {
        return farmDetail;
    }

    public void setFarm(FarmDetail farmDetail) {
        this.farmDetail = farmDetail;
    }

    public FeedLog getFeedLog() {
        return feedLog;
    }

    public void setFeedLog(FeedLog feedLog) {
        this.feedLog = feedLog;
    }

    public Antibiotic getAntibiotic() {
        return antibiotic;
    }

    public void setAntibiotic(Antibiotic antibiotic) {
        this.antibiotic = antibiotic;
    }

    @Override
    public String toString() {
        return "AnimalDetail{" +
                "animal=" + animal +
                ", farmDetail=" + farmDetail +
                ", feedLog=" + feedLog +
                ", antibiotic=" + antibiotic +
                '}';
    }
}
