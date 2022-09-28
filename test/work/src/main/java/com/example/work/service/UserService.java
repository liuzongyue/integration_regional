package com.example.work.service;

import com.example.work.common.R;
import com.example.work.dto.User;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

public interface UserService {

    R loginCheck(User user, HttpServletResponse response);

    List<User> selectAll();
}
