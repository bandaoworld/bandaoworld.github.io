---
title: "java学习笔记3"
time: "2021-11-20 22:39"
categories: ["Java学习笔记"]
tags: ["Java", "学习笔记", "基础", "String", "进制"]
---

{music id="1454328658" color="#1989fa" /}

# 一. 字符串

1. String（字符串）属于引用数据类型
2. 声明 String 是，需要一对双引号""
3. String 可以和 8 种基本数据类型做运算，而且只能是连接运算 + ，结果为 String

```java
public class StringTest {
    public static void main(String[] args) {
        char c = 'a';
        int num = 10;
        String str = "hello";
        //加法是从左加到右，String + int 得 String
        System.out.println(c + num + str);      //107hello
        System.out.println(c + (num + str));    //a10hello
        System.out.println(c + str + num);      //ahello10
        System.out.println(str + num + c);      //hello10a

        //注意 + 可以数字加，也可以连接
        //做运算用单引号，做字符串拼接用双引号
        System.out.println("*   *");            //*   *
        System.out.println('*' + '\t' + '*');   //97
        System.out.println('*' + "\t" + '*');   //*	*
        System.out.println("*" + "\t" + "*");   //*   *

        System.out.println(3.5f + "");          //3.5 字符串

        String str1 = 123 + "";
        //int num1 = (int)str1;                 //str 不能转换成 int
        int num1 = Integer.parseInt(str1);
        System.out.println(num1);               //123
    }
}
```

# 二. 进制

## 1. 常用的进制

> 二进制(binary)：0,1 ，满 2 进 1.以 0b 或 0B 开头。  
> 十进制(decimal)：0-9 ，满 10 进 1。  
> 八进制(octal)：0-7 ，满 8 进 1. 以数字 0 开头表示。  
> 十六进制(hex)：0-9 及 A-F，满 16 进 1. 以 0x 或 0X 开头表示。此处的 A-F 不区分大小写。

## 2. java 代码

```java
public class BinaryTest {
    public static void main(String[] args) {
        int num1 = 0b110;
        int num2 = 110;
        int num3 = 0127;
        int num4 = 0x110A;

        System.out.println("num1= " + num1);    //6
        System.out.println("num2= " + num2);    //110
        System.out.println("num3= " + num3);    //87
        System.out.println("num4= " + num4);    //4362
    }
}
```

## 3. 二进制转换成十进制(原码，反码，补码)

```text
14为0 0 0 0 1 1 1 0
1 * 2^3 + 1 * 2^2 + 1* 2^1 = 14
正数三码合一

-14为，首位取 1 表示负数
1 0 0 0 1 1 1 0     -14的原码

除符号位外，各个位取反
1 1 1 1 0 0 0 1     -14的反码

反码+1
1 1 1 1 0 0 1 0     -14的补码

计算机底层都以补码的方式来存储数据！
```

## 2. 十进制转换成二进制（除 2 取余的逆）

```text
13   ->   1
6    ->   0
3    ->   1
1    ->   1
0    ->   0

从下往上读：1101
```
