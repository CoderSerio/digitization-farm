package com.bbqd.farm.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author yueyinghaibao
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class RespModel {
    private int code;
    private Object data;
    private String msg;
}
