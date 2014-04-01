---
layout: post
title: 设计守则
tagline: 程序员需知
categories: zh program
language: zh
tags: 求道

description: 开发设计原则.
---

这些原则都是从实践中总结出来的，简单通用，是一个真正的程序员所应该遵循的。

- - -
## 高聚(High aggregation) ##

### 单一责任原则(SRP) ###
Single responsibility principle，一次只做一件事。
一个函数或方法，只实现一个单一的功能。

### 避免重复原则(DRY) ###
Don't repeat yourself，人不能两次踏进同一条河流。

### 接口分离原则(ISP) ###
Interface segregation principle，所给必是所需。
对于一个接口，如果实现的类并不需要所有方法，说明该接口应该被拆分。


- - -
## 低耦(Low coupling) ##

### 依赖反转原则(DIP) ###
Dependency inversion principle，不能被人左右。
上层模块不能依赖于底层；抽象不能依赖于实现。

### 接口先于实现(Interface over implementation) ###
理论指导实践。

### 复合先于继承(Composite over inherit) ###

### 替换原则(LSP) ###
[Liskov] subsitution principle，子承父业。
使用基类的地方，肯定能用具体子类代替。

### 迪米特法则(LoD) ###
Law of [Demeter]，你知道的太多了。
对外部对象所知信息越少，耦合越低。


- - -
## 开闭原则(OCP) ##
Open-closed principle，你可以控制我的身体，但无法控制我的思想。
对扩展开放，对修改封闭。


- - -
## 设计标准 ##

好的设计                | 差的设计
---------------------- | -------------
灵活(Flexibility)       | 刻板(Rigidity)
强壮(Robustness)        | 脆弱(Fragility)
可复用(Reusability)     | 复用率低(Immobility)
易维护(Maintainability) | 高粘度(Viscosity)
简单(Simpleness)        | 不必要的复杂(Needless complexity)
不重复(DRY)             | 多余的重复(Needless repetition)
可读性高(Readability)    | 可读性差(Opacity)