---
title: "java学习笔记1"
time: "2021-11-14 13:00"
categories: ["Java学习笔记"]
tags: ["Java", "学习笔记"]
---

{music id="1417055605" color="#1989fa" /}

# 一.软件开发时常见 DOS 命令

```text
dir : 列出当前目录下的文件以及文件夹
md : 创建目录
rd : 删除目录
cd : 进入指定目录
cd.. : 退回到上一级目录
cd\: 退回到根目录
del : 删除文件
exit : 退出 dos 命令行
```

# 二.第一个程序编写（helloworld）

```java
public class helloworld {
    public static void main(String[] args){
        System.out.println("hello, world!");
    }
}
```

输出结果：`hello, world!`

# 三.java 程序进行

1. 编译：javac + 程序名称.java
2. 运行：java + 程序名称（注意大小写）

# 四.Java 注释

## 1. 单行注释（和 C 一样）

```java
public class helloworld {
    public static void main(String[] args){         //这个是程序入口
        //args（arguments）参数名字，可以改变
        //括号里面可以写成 String args[] 但是比较少见
        System.out.println("hello, world!");        //下一语句输出到控制台，先输出后换行
        System.out.print("hello, world!");        //这句话不换行
    }
}
```

## 2. 多行注释（和 C 一样）

```java
/*
多行注释不可以嵌套使用
这里是多行注释
这里也是多行注释
*/
```

## 3. 文档注释 (java 特有)

```java
/**
@author 指定java程序的作者
@version 指定源文件的版本
 这里可以写中文
*/
```

### 单行注释和多行注释

1. 作用：
   1. 增强可读性
   2. 方便调试
2. 特点：不参与编译。

### 文档注释

1. 内容可以被 javadoc 解析，生成一套以网页文件形式体现的该程序的说明文档。
2. 使用方法：`javadoc -d mydoc(文件名)  -author -version Helloworld.java(文件名）-encoding utf-8`
3. 只有文档注释可以被 javadoc 读取，单行注释和多行注释不行

# 五.Java api 文档

介绍了如何使用 java 的类。

下载地址 : `http://www.oracle.com/technetwork/java/javase/downloads/index.html`

# 六.Tip

1. 一个 java 文件里面可以有多个 class，但是最多只有一个类声明为 public。
2. 要求声明为 public 的类的类名必须宇源文件名相同。
3. 程序的入口是 main 方法，格式是固定的。
4. 编译以后会生成 1 个或多个 class 文件，字节码文件的文件名要与 java 源文件中的类名一致。
5. 每一行都以 ; 结束。
