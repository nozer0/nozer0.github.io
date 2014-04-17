---
layout: post
title: Design Principles
tagline: Each Programmer should know
categories: en program
language: en
tags: principle

description: The design and developing principles.
---

These are very simple abstract but common practical principles which should be kept in mind by the real developers.

## KISS ##
Keep it simple and stupid, keep it short and strightforward.

## SoC ##
Seperation of concerns. Seperate into individual concerns, or modulars.


- - -
## High cohesion ##

Cohesion refers to the degree to which the elements of a module belong together.

### DRY ###
Don't repeat yourself.

### SRP ###
Single responsibility principle, 'S' of 'SOLID'. Everytime do one thing only.

### ISP ###
Interface segregation principle, 'I' of 'SOLID'. If implement Class do not need all methods, it means the interface should be seperated to 2 or more ones.

### CQS ###
Command-query separation. Every method should either be a command to set state or a query returns something.

### REP ###
Release reuse equivalency principle, package principles. The granule of reuse is the granule of release.

### CCP ###
Common closure principle, package principles. Classes that change together are packaged together.

### CRP ###
Common reuse principle, package principles. Classes that are used together are packaged together.


- - -
## Low coupling ##

Coupling or dependency is the degree to which each program module relies on each one of the other modules.

### OCP ###
Open-closed principle, 'O' of 'SOLID'. Open for extension, closed for modification.

### LSP ###
[Liskov] subsitution principle, 'L' of 'SOLID'. Base types can be surely subsituted by their subtypes.

### DIP ###
Dependency inversion principle, 'D' of 'SOLID'. High-level modules should not depend on low-level modules; abstractions should not depend on details.

### LoD ###
Law of [Demeter]. Know as least as you can.

### IoC ###
Inversion of Control. Don't call us, we'll call you. Instead of calling reusable codes such as libraries from custom codes in tranditional way, let reusable codes like framework to call the custom codes.

### IoI ###
Interface over implementation.

### CoI ###
Composition over inheritance.

### CoC ###
Convention over Configuration.

### ADP ###
Acyclic dependencies principle, package principles. No cycle dependency exists.


- - -
## Design smells ##

Good design     | Bad design
--------------- | -------------
Correctness     | Incorrectness
Consistency     | Polytropism
Simplicity      | Needless complexity
DRY             | Needless repetition
Reusability     | Immobility
Flexibility     | Rigidity
Robustness      | Fragility
Maintainability | Viscosity
Readability     | Opacity