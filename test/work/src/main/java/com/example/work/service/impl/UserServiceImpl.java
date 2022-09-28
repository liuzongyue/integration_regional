package com.example.work.service.impl;

import com.example.work.mapper.UserMapper;
import com.example.work.common.R;
import com.example.work.dto.User;
import com.example.work.service.UserService;
import com.example.work.util.TokenUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {


    @Resource
    private UserMapper userMapper;


    @Autowired
    TokenUtil tokenUtil;

    @Override
    public R loginCheck(User user, HttpServletResponse response) {
        User user2 = userMapper.selectByName(user.getUsername());
        if (user2 == null) {
            return R.code("失败").message("该用户不存在！");
        }
        if (!user2.getPassword().equals(user.getPassword())) {
            return R.code("失败").message("密码错误！");
        }
        String token = tokenUtil.generateToken(user2);

        Cookie cookie = new Cookie("token", token);
//        设置cookie的作用域：为”/“时，以在webapp文件夹下的所有应用共享cookie
        //cookie.setPath("/");
        response.addCookie(cookie);
        return R.code("成功").message("登录成功！");

    }

    @Override
    public List<User> selectAll() {
        return userMapper.selectAll();
    }
}
