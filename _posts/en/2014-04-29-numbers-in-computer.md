---
layout: post
title: Numbers in computer
categories: en system
language: en
tags: notation code byte-order study

keywords: notation, byte order, binary, decimal, float, normalize, IEEE 754
description: Look at how numbers stored in computers.
---

This time, we will take a look at how numbers stored in computers.

Before we start, let us see the simple program first.

```c
#include <stdio.h>

int main(int argc, char* argv[]) {
    int i = 1;
    float *p2 = (float *)&i;
    printf("%.20g\n", *p2);
    printf("%d\n", 0.4 + 0.2 == 0.6);
    return 0;
}
```

Something surprise?


<a id="notation-system"></a>
## Notation System ##

I think no need more explanation about notation system, just refers normally used ones in Computer.

Binary   | Octal | Decimal  | Hexadecimal
---------|-------|----------|-------------
10011101 | 235   | 157      | 9D
0.100111 | 0.47  | 0.609375 | 0.9C

How to convert numbers between different systems? See the examples.

<pre>
    Q:
        26(D) = ?(B)
    A:
                26 | 13 | 6 | 3 | 1
            /   2
    remainder    0 |  1 | 0 | 1 | 1
        26(D) = 11010(B)
    ~~~~~~
    Q:
        0.8125(D) = ?(B)
    A:
    fractional  0.8125 | 0.625 | 0.25 | 0.5 | 0
             *  2
    integer              1     | 1    | 0   | 1
        0.8125(D) = 0.1101(B)
</pre>


<a id="representation"></a>
## Representation ##

Natively, computers use binary system to represent numbers, another way of saying, use sequence of bits to represent numbers, usually, 32 bits for integer.

The most understandable way is to use the binary value directly, and add one more bit to indicate the sign, 0 as positive, and 1 as negative, this is called 'Original Code'. But it needs to do addition or subtraction based on the sign bits, and also 2 formats for 0, '0 0..0' and '1 0..0'.

For easy calculation, another representation called 'Anti-Code' or 'Ones Complement Code' is defined, if the value is negative, invert all bits except the sign bit of the regarding original value to get the result, otherwise, the same as original code. It can do calculation directly with sign bit, and can do addition calculation only instead of subtraction, for example.

<pre>
      1 1110111 (-8)             0 0001000 (+8)
    + 0 0001101 (+13)          + 0 0001101 (+13)
    ------------------          ------------------
    1 0 0000100                0 0 0010101
    +         1 (carry)        +         0 (carry)
    ------------------          ------------------
      0 0000101 (+5)             0 0010101 (+21)
</pre>

Unfortunately, it still has 2 'zer0' values problem, '0 0..0' for '+0', and '1 1..1' for '-0'. The 'Two Complement Code', or simply 'Complement Code', which is the current standard representation for integer wins out at last. The only difference is add 1 if negative, '1 1..1' becomes -1 instead of '-0', one more number '-2^(bit-1)' can be represented and no need carry back addition step. 

Actually, the complement code of -8 = 111111000 = 248, and the one of +8 = 000001000 = 8 are congruent modulo 256, that is why subtraction can be calculated even by adder and complementer only.

<pre>
      1 1111000 (-8)             0 0001000 (+8)
    + 0 0001101 (+13)          + 0 0001101 (+13)
    ------------------          ------------------
    1 0 0000101 (+5)           0 0 0010101 (+21)
</pre>


'Shift Code', or 'Bias Code', used in IEEE.754, which comes next, is add bias value 2^(bit-1) to make no negative forms.

|            | Positive(38) | Negative(-38) | Definition       | Pros&Cons
|------------|--------------|---------------|------------------|-----------
| Original   | 0 0100110    | 1 0100110     | sign + binary    | Understandable, Sign bit can't join calculation
| Anti       | 0 0100110    | 1 1011001     | X > 0 ? : ~b     | Calculate with sign bit, 2 zero representations
| Complement | 0 0100110    | 1 1011010     | X > 0 ? : ~b + 1 | Unique for +0 and -0, one more number -128 for 32 bits
| Shift      | 1 0100110    | 0 1011010     | X + 2^(k-1)      | Simple to compare, unique 0

|   Range    |  UInteger  |     Integer     |     Fixed Fraction     |
|------------|------------|-----------------|------------------------|
| Original   | 0 ~ 2^32-1 | 1-2^31 ~ 2^31-1 | -1+2^(-31) ~ 1-2^(-31) |
| Anti       |            | 1-2^31 ~ 2^31-1 | -1+2^(-31) ~ 1-2^(-31) |
| Complement |            |  -2^31 ~ 2^31-1 |         -1 ~ 1-2^(-31) |
| Shift      |            |  -2^31 ~ 2^31-1 |                        |


<a id="byte_order"></a>
## Byte Order ##

We already know different representation ways, but when input into bytes, it still have 2 formats based on the byte order. If put the most significant byte into the lowest address, this is called 'big-endian', on the contrary, 'little-endian', these names are from the book "Gulliver's Travels".
For example, the number '0xabcd', stores from 'a' to 'd' if 'big-endian', instead, 'd' to 'a'. Almost of CPUs, Intel, AMD are use 'little-endian' way.


<a id="float"></a>
## Float ##

We already know computers store the integer numbers by complement codes, how about fractional numbers? The most simple way is to give fixed place of radix point, this is called 'fixed-point', for example, if we define bits 0~2 to represent fractional part, 0 0010 110 = 2.75. 

The fixed-point representation is simple but smaller range than integer with same bits, to represent more numbers and much larger range, the common use way is called 'float-point', that means, the radix point is float.

### Normalize ###

One number can have infinite notation representations, for example, 100110 can be represented as `110.11 * 2^3`, or `1.1011 * 2^5`, the represent conversion for a number which keeps 1 only in the integer part, is called as 'Normalization'.

Opposite to 'Normalization', 'Denormalization' makes no exponent part.

### IEEE.754 ###

All modern computers store the float numbers based on the IEEE 754 Standard. Simple formats are shown below.

| type   | bits | sign | exponent | fraction |
|--------|------|------|----------|----------|
| float  |  32  |  1   |     8    |    23    |
| double |  64  |  1   |    11    |    52    |

It is composed with 3 parts, 'sign', 'exponent' and 'fraction', we will use lowercase characters 's', 'e' and 'f' as bit number of each part, and 'S', 'E' and 'F' as values.

'Shift code' representation is used for exponent part, `the exponent value = E - bias = E - (2^(e-1) - 1)`, for 32 bits, bias = 2^(8-1) - 1 = 127, exponent = -127 ~ 128.

To make more significand and precision, it applies both 'Normalization' and 'Denormalization'.

With 'Normalization', it uses as most significant fraction bits, besides, all normalize numbers take 1 as integer part so as to ignore that unique bit in fraction part. We can get the formula `float = -1^S * 1.F * 2^(E - (2^(e-1) - 1))`.

Take 32 bits as example, if we use normalized notation only, the minimum absolute number value larger than 0 is 1.0..00 * 2^-127, the 2nd minimum is 1.0..01 * 2^-127, the 'gap' between minimum and 0 is much larger than the difference between it and the 2nd minimum which is 2^-(127+23) = 2^-150. Take the diagram for more intuition.

```
           ┌─── 2^-149 ───┐ ┌ 2^-150 ┐                         ┌ 2^-150 ┐ ┌──────────── 2^-127 ────────────┐
    1.0..1*2^-126, 1.0..0*2^-126, 1.1..1*2^-127, ..., 1.0..1*2^-127, 1.0..0*2^-127,                        0
```

This is called 'abrupt underflow', so for the number absolute value less than 2^(e-1) - 2, IEEE uses denormalize notation representation, and add 1 to the exponent bias, so as to make 'gradual underflow'.

```
           ┌─── 2^-148 ───┐                     ┌ 2^-149 ┐     ┌ 2^-149 ┐                       ┌ 2^-149 ┐
    1.0..1*2^-125, 1.0..0*2^-125, ..., 1.0..1*2^-126, 1.0..0*2^-126, 0.1..1*2^-126, ..., 0.0..1*2^-126,  0
```

This is the structure table for IEEE.754 float notation.

|                    | exponent |        E        | fraction  | 32 bits
|:-------------------|:---------|:----------------|-----------|:--------
| 0                  | 00..0    | 2 - 2^(e-1)     | [0.]00..0 | 0
| Min Denormalized N | 00..0    | 2 - 2^(e-1)     | [0.]00..1 | 2^-149
| Denormalized N     | 00..0    | 2 - 2^(e-1)     | [0.]**..* | 0.F * 2^-126
| Max Denormalized N | 00..0    | 2 - 2^(e-1)     | [0.]11..1 | 1 - 2^-149
| Min Normalized N   | 00..1    | 2 - 2^(e-1)     | [1.]00..0 | 2^-126
| Normalized N       | **..*    | E + 1 - 2^(e-1) | [1.]**..* | 1.F * 2^(E - 127)
| Max Normalized N   | 11..0    | 2^(e-1) - 1     | [1.]11..1 | 2^128-2^104
| Infinity           | 11..1    | 1 - 2^(e-1)     | [1.]00..0 | 
| NaN                | 11..1    | 1 - 2^(e-1)     |           |


- - -
Now, let us see back what happened in the beginning example.

As we can know, the integer bytes of 1 is '00000000 00000000 00000000 00000001', and the float value represented by same bytes is 2^-149.

The bytes result of 0.2 + 0.4 is '00111111 00011001 10011001 10011010', it's the same with 0.6 counterpart. So, how is going? The problem is precision, actually, the binary of 0.6 is an infinity repeating number, '0.100[1100]*', it can be only approximately represented on computer, the calculate result of '00111111 00011001 10011001 10011010' can't be 0.6, it may 0.6000000000000001 or 0.60000000000000008 based on the precision, so as 0.2 and 0.4.

- - -
As a present, [here](/articles/number-convertor.html) is a little tool to convert between different notation systems.