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

- - -
## High aggregation ##

### SRP ###
Single responsibility principle. Everytime do one thing only.

### DRY ###
Don't repeat yourself.

### ISP ###
Interface segregation principle. If implement Class do not need all methods, it means the interface should be seperated to 2 or more ones.


- - -
## Low coupling ##

### DIP ###
Dependency inversion principle. High-level modules should not depend on low-level modules; abstractions should not depend on details.

### Interface over implementation ###

### Composite over inherit ###

### LSP ###
[Liskov] subsitution principle. Base types can be surely subsituted by their subtypes.

### LoD ###
Law of [Demeter]. Know as least as you can.


- - -
## OCP ##
Open-closed principle. Open for extension, closed for modification.


- - -
## Design smells ##

Good design     | Bad design
----------------|--------------
Flexibility     | Rigidity
Robustness      | Fragility
Reusability     | Immobility
Maintainability | Viscosity
Simpleness      | Needless complexity
DRY             | Needless repetition
Readability     | Opacity