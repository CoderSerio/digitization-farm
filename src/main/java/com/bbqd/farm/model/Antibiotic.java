package com.bbqd.farm.model;

import java.io.Serializable;

public class Antibiotic implements Serializable {
    private Long antibioticId;

    private String antibioticName;

    private String species;

    private Byte growthStage;

    private Integer dose;

    private static final long serialVersionUID = 1L;

    public Long getAntibioticId() {
        return antibioticId;
    }

    public void setAntibioticId(Long antibioticId) {
        this.antibioticId = antibioticId;
    }

    public String getAntibioticName() {
        return antibioticName;
    }

    public void setAntibioticName(String antibioticName) {
        this.antibioticName = antibioticName;
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

    public Integer getDose() {
        return dose;
    }

    public void setDose(Integer dose) {
        this.dose = dose;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", antibioticId=").append(antibioticId);
        sb.append(", antibioticName=").append(antibioticName);
        sb.append(", species=").append(species);
        sb.append(", growthStage=").append(growthStage);
        sb.append(", dose=").append(dose);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}