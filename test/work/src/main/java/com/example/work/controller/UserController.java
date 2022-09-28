package com.example.work.controller;

import com.example.work.common.R;
import com.example.work.dto.User;
import com.example.work.service.UserService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Resource
    private UserService userService;


    @GetMapping("/login")
    public String toLoginPage() {
        return "login";
    }

    @PostMapping("/loginCheck")
    public R login(@RequestBody User user, HttpServletResponse response) {
        System.out.println(user.toString());
        R result = userService.loginCheck(user, response);
        return result;
    }

    @PostMapping("/query/all")
    @ResponseBody
    public R query(@RequestBody User user, HttpServletResponse response) {
        List<User> userList = userService.selectAll();
        R result = new R();
        result.data(userList);
        return result;
    }


}