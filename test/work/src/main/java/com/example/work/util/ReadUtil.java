package com.example.work.util;

import java.io.File;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.List;

public class ReadUtil {

    //定义一个list集合存放所有便利到的文件路径
    public static List<String> filePaths = new ArrayList<>();
    //定义一个list集合存放所有文件的文件名

    public static void main(String[] args) {
        //给定一个根目录，按照父子目录的结构，需要存储文件名跟与文件路径
        File file = new File("D:\\software\\software1");
        readFile(file);
        filePaths.forEach(a->{
            System.out.println(a);
        });
    }

    public static void readFile(File filePath){

        File[] files1 = filePath.listFiles();
        if (files1!=null){
            for (int i = 0; i < files1.length; i++) {
                if (files1[i].isDirectory()){
                    readFile(files1[i]);
                }else {
                    filePaths.add(files1[i].getAbsolutePath());
                }
            }
        }
    }


}
