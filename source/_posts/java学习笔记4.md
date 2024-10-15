---
title: "java学习笔记4"
time: "2021-11-21 11:15"
categories: ["Java学习笔记"]
tags: ["Java", "学习笔记", "基础", "运算符"]
---

{music id="1817839113" color="#1989fa" /}

# 一. 运算符

> 算术运算符  
> 赋值运算符  
> 比较运算符（关系运算符）  
> 逻辑运算符  
> 位运算符  
> 三元运算符

## 1. 算术运算符

### 1. 常用的算术运算符

| 运算符 |           运算           |    范例    |  结果   |
| :----: | :----------------------: | :--------: | :-----: |
|   +    |           正号           |     +3     |    3    |
|   -    |           负号           |  b=4; -b   |   -4    |
|   +    |            加            |    5+5     |   10    |
|   -    |            减            |    6-4     |    2    |
|   \*   |            乘            |    3\*4    |   12    |
|   /    |            除            |    5/5     |    1    |
|   %    |        取模(取余)        |    7%5     |    2    |
|   ++   | 自增（前）：先运算后取值 | a=2;b=++a; | a=3;b=3 |
|   ++   | 自增（后）：先取值后运算 | a=2;b=a++; | a=3;b=2 |
|  - -   | 自减（前）：先运算后取值 | a=2;b=- -a | a=1;b=1 |
|  - -   | 自减（后）：先取值后运算 | a=2;b=a- - | a=1;b=2 |
|   +    |        字符串连接        | “He”+”llo” | “Hello  |

### 2. 除法运算 /

#### java 代码

```java
public class AriTest {
    public static void main(String[] args) {
        int num1 = 12;
        int num2 = 5;
        int result1 = num1 / num2;
        System.out.println(result1);    //2

        int result2 = num1 / num2 * num2;
        System.out.println(result2);    //10

        double result3 = num1 / num2;
        System.out.println(result3);    //2.0

        double result4 = num1 / (num2 + 0.0);   //2.4
        System.out.println(result4);

        double result5 = (double) num1 / num2;  //2.4
        System.out.println(result5);
    }
}
```

### 2. 取余运算 %

#### 1. java 代码

```java
public class AriTest {
    public static void main(String[] args) {
        //取余运算 %
        System.out.println("12 % 5 = " + 12 % 5);       //2
        System.out.println("-12 % 5 = " + -12 % 5);     //-2
        System.out.println("12 % -5 = " + 12 % -5);     //2
        System.out.println("-12 % -5 = " + -12 % -5);   //-2
    }
}
```

#### 2. Tip

> 1. 结果的符号与被模数(前面那个)的符号相同。
> 2. 经常使用%来判断能否被除尽的情况。

### 3. 前后自增（减） ++ --

#### 1.运算规则

> (前)++ :先自增 1，后运算  
> (后)++ :先运算，后自增 1  
> (前)-- :先自减 1，后运算  
> (后)-- :先运算，后自减 1  
> 自增 1 不会改变本身的数据类型

#### 2. java 代码

```java
public class AriTest {
    public static void main(String[] args) {
        //a++  ++a
        int a1 = 10;
        int b1 = ++a1;
        System.out.println("a1 = " + a1 + ",b1 = " + b1);//11   11

        int a2 = 10;
        int b2 = a1++;
        System.out.println("a2 = " + a2 + ",b2 = " + b2);//10   11

        int a3 = 10;
        //这样子两个都是一样的
        ++a3;//a3++;

        short s1 = 10;
        s1 = (short) (s1 + 1);      //这个是可以的
        System.out.println(s1);     //11
        s1++;                       //自增1不会改变本身的数据类型
        System.out.println(s1);     //12

        //--a a--
        int a4 = 10;
        int b4 = --a4;
        System.out.println("a4 = " + a4 + ",b4 = " + b4);   //9 9
    }
}
```

## 2. 赋值运算符

### 1. java 代码

```java
public class SetValueTest {
    public static void main(String[] args) {
        int i1 = 10;
        int j1 = 10;
        int i2 = 10, j2 = 20;
        //int i3 = j3 = 10;     这个不行

        int i3, j3;
        //连续赋值
        i3 = j3 = 10;

        int num1 = 10;
        num1 += 2;
        System.out.println(num1);   //12

        short s1 = 10;
        //s1 = s1 + 2;//编译失败
        s1 += 2;//结论：不会改变变量本身的数据类型
        System.out.println(s1);     //12

        int n1 = 10;
        n1 += (n1++) + (++n1);//n1 = n1 + (n1++) + (++n1);
        System.out.println(n1);//32
    }
}
```

### 2. Tip

> 支持连续赋值。  
> 扩展赋值运算符： +=, -=, \*=, /=, %=  
> 不会改变变量本身的数据类型

## 3. 比较运算符

### 1. 常用的比较运算符

|   运算符   |        运算        |           范例            | 结果  |
| :--------: | :----------------: | :-----------------------: | :---: |
|     ==     |       相等于       |           4==3            | false |
|     !=     |       不等于       |           4!=3            | true  |
|     <      |        小于        |            4<3            | false |
|     >      |        大于        |            4>3            | true  |
|     <=     |      小于等于      |           4<=3            | false |
|     >=     |      大于等于      |           4>=3            | true  |
| instanceof | 检查是否是类的对象 | “Hello” instanceof String | true  |

### 2. java 代码

```java
public class CompareTest {
    public static void main(String[] args) {
        int i = 10;
        int j = 20;

        System.out.println(i == j);     //false
        System.out.println(i = j);      //20

        boolean b1 = true;
        boolean b2 = false;
        System.out.println(b2 == b1);   //false
        System.out.println(b2 = b1);    //true
    }
}
```

### 3. Tip

> 比较运算符的结果是 boolean 类型  
> 区分 == 和 =

## 4.逻辑运算符

### 1. 常用的逻辑运算符

> & —逻辑与  
> | —逻辑或  
> ! —逻辑非  
> && —短路与  
> || —短路或  
> ^ —逻辑异或

### 2.运算规则

|   a   |   b   |  a&b  | a&&b  | a&#124;b | a&#124;&#124;b |  !a   |  a^b  |
| :---: | :---: | :---: | :---: | :------: | :------------: | :---: | :---: |
| true  | true  | true  | true  |   true   |      true      | false | false |
| true  | false | false | false |   true   |      true      | false | true  |
| false | true  | false | false |   true   |      true      | true  | true  |
| false | false | false | false |  false   |     false      | true  | false |

### 3.结论

1. 与：一假则假
2. 或：有真则真
3. 非：取反
4. 异或：一样则假，不一样则真

### 4. java 代码

```java
public class LogicTest {
    public static void main(String[] args) {
        //相同点：& 与  && 的运算结果相同
        //当符号左边是true时，二者都会执行符号右边的运算
        //当符号左边是false时，&继续执行符号右边的运算。&&不再执行符号右边的运算。
        //开发中，推荐使用&&
        boolean b1 = true;
        b1 = false;
        int num1 = 10;
        if(b1 & (num1++ > 0)){
            System.out.println("我现在在北京");
        }else{
            System.out.println("我现在在南京");   //这个
        }
        System.out.println("num1 = " + num1);   //11

        boolean b2 = true;
        b2 = false;
        int num2 = 10;
        if(b2 && (num2++ > 0)){
            System.out.println("我现在在北京");
        }else{
            System.out.println("我现在在南京");   //这个
        }
        System.out.println("num2 = " + num2);   //10


        //相同点：| 与  || 的运算结果相同
        //当符号左边是false时，二者都会执行符号右边的运算
        //当符号左边是true时，|继续执行符号右边的运算，而||不再执行符号右边的运算
        //开发中，推荐使用||
        boolean b3 = false;
        b3 = true;
        int num3 = 10;
        if(b3 | (num3++ > 0)){
            System.out.println("我现在在北京");   //这个
        }else{
            System.out.println("我现在在南京");
        }
        System.out.println("num3 = " + num3);   //11

        boolean b4 = false;
        b4 = true;
        int num4 = 10;
        if(b4 || (num4++ > 0)){
            System.out.println("我现在在北京");   //这个
        }else{
            System.out.println("我现在在南京");
        }
        System.out.println("num4 = " + num4);   //10
    }
}
```

### 5. Tip

逻辑运算符操作的都是 boolean 类型的变量

## 5. 位运算符(直接对整数的二进制进行的运算)

### 1. 常见的位运算符

| 运算符 |    运算    |           范例           |
| :----: | :--------: | :----------------------: |
|   <<   |    左移    | 3 << 2 = 12 --> 3*2*2=12 |
|   >>   |    右移    |   3 >> 1 = 1 --> 3/2=1   |
|  >>>   | 无符号右移 |  3 >>> 1 = 1 --> 3/2=1   |
|   &    |   与运算   |        6 & 3 = 2         |
| &#124; |   或运算   |      6 &#124; 3 = 7      |
|   ^    |  异或运算  |        6 ^ 3 = 5         |
|   ~    |  取反运算  |         ~6 = -7          |

### 2. 位运算符的细节

| 位运算符 |                                               细节                                               |
| :------: | :----------------------------------------------------------------------------------------------: |
|    <<    |                             空位补 0，被移除的高位丢弃，空缺位补 0。                             |
|    >>    |              被移位的二进制最高位是 0，右移后，空缺位补 0；最高位是 1，空缺位补 1。              |
|   >>>    |                      被移位二进制最高位无论是 0 或者是 1，空缺位都用 0 补。                      |
|    &     |                        二进制位进行&运算，只有 1&1 时结果是 1，否则是 0;                         |
|  &#124;  |                 二进制位进行 &#124; 运算，只有 0 &#124; 0 时结果是 0，否则是 1;                  |
|    ^     | 相同二进制位进行 ^ 运算，结果是 0；1^1=0 , 0^0=0 。 不相同二进制位 ^ 运算结果是 1。1^0=1 , 0^1=1 |
|    ~     |              正数取反，各二进制码按补码各位取反。负数取反，各二进制码按补码各位取反              |

### 3. java 代码

```java
public class BitTest {
    public static void main(String[] args) {
        int i = 21;
        //i = -21;
        System.out.println("i << 2 :" + (i << 2));
        System.out.println("i << 3 :" + (i << 3));
        System.out.println("i << 27 :" + (i << 27));

        int m = 12;
        int n = 5;
        //写成二进制，1表示true，表示false
        System.out.println("m & n :" + (m & n));    //4
        System.out.println("m | n :" + (m | n));    //13
        System.out.println("m ^ n :" + (m ^ n));    //9
        System.out.println("~m:" + (~m));           //-13  符号位也取反
    }
}
```

### 4. Tip

1. 位运算符操作的都是整型的数据
2. << ：在一定范围内，每向左移 1 位，相当于 \* 2
3. \>> :在一定范围内，每向右移 1 位，相当于 / 2

## 6. 三元运算符

### 1. 结构：(条件表达式)? 表达式 1 : 表达式 2

### 2.java 代码

```java
public class SanYuanTest {
    public static void main(String[] args) {
        //取最大值
        int m = 12;
        int n = 5;

        int max = (m > n) ? m : n;  //12
        System.out.println(max);

        double num = (m > n)? 2 : 1.0;

        //(m > n)? 2 : "n大";//编译错误

        n = 12;
        String maxStr = (m > n)? "m大" : ((m == n)? "m和n相等" : "n大");
        System.out.println(maxStr);

        //获取三个的最大值
        int n1 = 12;
        int n2 = 30;
        int n3 = -43;
        int max1 = (n1 > n2)? n1 : n2;
        int max2 = (max1 > n3)? max1 : n3;
        System.out.println("三个数中的最大值为：" + max2);
    }
}
```

### 3. Tip

1. 条件表达式的结果为 boolean 类型.
2. 根据条件表达式真或假，true 则表达式 1，false 则表达式 2.
3. 表达式 1 和表达式 2 数据类型.
4. 要求是一致的。
5. 三元运算符可以嵌套使用.
6. 可以使用三元运算符的地方，都可以改写为 if-else，不能反过来.
7. 如果既可以三元运算符，又可以 if-else 结构，那么优先三元运算符。原因：简洁、执行效率高。

# 2. 运算符优先级

（从上到下由高到低）

|      |      .() {} ; ,      |
| :--: | :------------------: |
| R—>L | ++ -- ~ !(data type) |
| L—>R |        \* / %        |
| L—>R |         + -          |
| L—>R |      << >> >>>       |
| L—>R | < > <= >= instanceof |
| L—>R |        == !=         |
| L—>R |          &           |
| L—>R |          ^           |
| L—>R |        &#124;        |
| L—>R |          &&          |
| L—>R |     &#124;&#124;     |
| R—>L |         ? :          |
| R—>L |     = \*= /= %=      |
|      |    += -= <<= >>=     |
|      |  >>>= &= ^= &#124;=  |

1. 优先用括号
2. 只有单目运算符、三元运算符、赋值运算符是从右向左运算的。
