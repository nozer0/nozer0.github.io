---
layout: post
title: 设计守则
tagline: 程序员需知
categories: zh technology program
language: zh
tags: 求道

description: 开发设计原则。
---

这些原则都是从实践中总结出来的，简单通用，是一个真正的程序员所应该遵循的。

## KISS ##
Keep it simple and stupid, keep it short and strightforward. 唯愿吾儿愚且鲁，无灾无难到公卿。

## SoC ##
Seperation of concerns，大事化小，小事化了。

将概念，问题拆分，模块化。

- - -
## 高聚（High cohesion） ##

聚合度是衡量模块中各元素联系的一个标准。

### 避免重复原则（DRY） ###
Don't repeat yourself，人不能两次踏进同一条河流。

### 单一责任原则（SRP） ###
Single responsibility principle，'SOLID'中的'S'，一次只做一件事。

一个函数或方法，只实现一个单一的功能。

### 接口分离原则（ISP） ###
Interface segregation principle，'SOLID'中的'I'，所给必是所需。

对于一个接口，如果实现的类并不需要所有方法，说明该接口应该被拆分。

### 命令查询分离原则（CQS） ###
Command-query separation，非黑即白。

每个方法要不是一个更改状态的命令，要不是一个返回某个结果的查询。

### 重用发布等价原则（REP） ###
Release reuse equivalency principle，包原则之一。投我以木瓜，报之以琼琚。

### 共同封闭原则（CCP） ###
Common closure principle，包原则之一。

由同一个更改导致改变的类应该在同一个包中，反之亦然。

### 共同重用原则（CRP） ###
Common reuse principle，包原则之一。


- - -
## 低耦（Low coupling） ##

耦合度是指每个模块对其他模块的依赖程度。

### 开闭原则（OCP） ###
Open-closed principle，'SOLID'中的'O'，你可以控制我的身体，但无法控制我的思想。

对扩展开放，对修改封闭。

### 里氏替换原则（LSP） ###
[Liskov] subsitution principle，'SOLID'中的'L'，子承父业。

使用基类的地方，肯定能用具体子类代替。

### 依赖反转原则（DIP） ###
Dependency inversion principle，'SOLID'中的'D'，不能被人左右。

上层模块不能依赖于底层；抽象不能依赖于实现。

### 迪米特法则（LoD） ###
Law of [Demeter]，你知道的太多了。

对外部对象所知信息越少，耦合越低。

### 控制反转原则（IoC） ###
Inversion of Control，不要试图找到我，需要的时候我会找你。

不同于传统的由用户代码来调用重用的代码库方式，而是由重用的代码例如框架来调用用户代码。

### 接口优于实现（IoI） ###
Interface over implementation，理论指导实践。

### 复合优于继承（CoI） ###
Composition over inheritance。

### 约定优于配置（CoC） ###
Convention over Configuration。

### 无环依赖原则（ADP） ###
Acyclic dependencies principle，包原则之一。

不存在循环依赖。


- - -
## 设计标准 ##

|          好的设计         |    差的设计
|--------------------------|--------------
| 正确（Correctness）       | 错误（Incorrectness）
| 一致（Consistency）       | 多变（Polytropism）
| 简单（Simpleness）        | 不必要的复杂（Needless complexity）
| 不重复（DRY）             | 多余的重复（Needless repetition）
| 可复用（Reusability）     | 复用率低（Immobility）
| 灵活（Flexibility）       | 刻板（Rigidity）
| 强壮（Robustness）        | 脆弱（Fragility）
| 易维护（Maintainability） | 高粘度（Viscosity）
| 可读性高（Readability）   | 可读性差（Opacity）