# for python 3.5 and above
import math

# Based on ISSN 2225-8787 by Beimar Lopez
def Eit(x):
    if x <= 0 or x - math.floor(x) > 0:
        return 0
    else:
        return 1


def printPrimeNumbersUpTo(x):
    aa = (2 * x + math.pow(-1, x) - 1) / 6
    a = round(aa, 0)
    cc = (-1 + math.sqrt(-2 + 3 * aa)) / 3
    c = -math.floor(cc * -1)
    m = c
    n = a - 1
    sum = 0
    k = 0
    t = 0
    print(2, ', ', sep='', end='')
    print(3, ', ', sep='', end='')
    # Note: To improve the performance of the algorithm,
    #       Replaced math.pow(-1, i) by i_even_odd that changes its sign every time i is even or odd
    #       Replaced math.pow(-1, j) by j_even_odd that changes its sign every time j is even or odd
    #       Replaced math.pow(-1, i + j) by i_j_even_odd that changes its sign every time (i+j) is even or odd
    j = 1
    i_j_even_odd = 1
    j_even_odd = -1
    while j <= n:
        i = 1
        i_even_odd = -1
        while i < m:
            r = Eit(
                (
                    4 * j
                    - j_even_odd
                    + (2 * i + 1) * i_j_even_odd
                    + (2 * i - 1) * i_even_odd
                    - 12 * i * i
                    + 5
                ) / (
                    12 * i
                    + 6 - 2 * i_even_odd
                )
            )
            k = r + k
            i += 1
            i_even_odd *= -1
            i_j_even_odd *= -1
        sum = Eit(k) + sum
        if Eit(k) == 0:
            t = (-j_even_odd + 3 + 6 * j) / 2
            print(int(t), ', ', sep='', end='')
        k = 0
        j += 1
        i_j_even_odd *= -1
        j_even_odd *= -1


# Get prime numbers up to x

print("Get prime numbers up to X (>3): ")
x = int(input())
print("Prime numbers found: ")
printPrimeNumbersUpTo(x)
