package com.bbqd.farm.model;

import java.io.Serializable;

public class Animal implements Serializable {
    private Long animalId;

    private String species;

    private Byte growthStage;

    private Byte healthStatus;

    private String farm;

    private Long feedLogId;

    private static final long serialVersionUID = 1L;

    public Long getAnimalId() {
        return animalId;
    }

    public void setAnimalId(Long animalId) {
        this.animalId = animalId;
    }

    public String getSpecies() {
        return species;
    }

    public void setSpecies(String species) {
        this.species = species;
    }

    public Byte getGrowthStage() {
        return growthStage;
    }

    public void setGrowthStage(Byte growthStage) {
        this.growthStage = growthStage;
    }

    public Byte getHealthStatus() {
        return healthStatus;
    }

    public void setHealthStatus(Byte healthStatus) {
        this.healthStatus = healthStatus;
    }

    public String getFarm() {
        return farm;
    }

    public void setFarm(String farm) {
        this.farm = farm;
    }

    public Long getFeedLogId() {
        return feedLogId;
    }

    public void setFeedLogId(Long feedLogId) {
        this.feedLogId = feedLogId;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", animalId=").append(animalId);
        sb.append(", species=").append(species);
        sb.append(", growthStage=").append(growthStage);
        sb.append(", healthStatus=").append(healthStatus);
        sb.append(", farm=").append(farm);
        sb.append(", feedLogId=").append(feedLogId);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}