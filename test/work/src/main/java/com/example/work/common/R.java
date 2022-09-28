package com.example.work.common;

import lombok.Data;

import java.io.Serializable;

@Data
public class R<T> implements Serializable {
    private String code;
    private String message;
    private T data;

    public static R code(String code){
        R r = new R();
        r.setCode(code);
        return r;
    }

    public  R message(String message){
        this.setMessage(message);
        return this;
    }


    public  R<T> data(T o){
        this.setData(o);
        return this;
    }

}
