package com.example.work.mapper;

import com.example.work.dto.User;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UserMapper {

    User selectByName(String username);

    List<User> selectAll();
}
