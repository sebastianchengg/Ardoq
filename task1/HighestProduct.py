def highest_product(integer_list):
    integers = integer_list
    three_biggest = []

    for i in range(3):
        largest = max(integers)
        three_biggest.append(largest)
        integers.remove(largest)

    return three_biggest[0]*three_biggest[1]*three_biggest[2]