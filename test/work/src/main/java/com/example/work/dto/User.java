package com.example.work.dto;


import jdk.nashorn.internal.ir.annotations.Ignore;
import lombok.Data;

@Data
public class User {
    @Ignore
    private String id;

    private String username;
    private String password;

    @Override
    public String toString() {
        return "User{" +
                "id='" + id + '\'' +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
