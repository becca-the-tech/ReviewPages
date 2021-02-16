import random

randomNum = random.randint(1, 2)
heads_option = input("What would you like Heads to represent? \n")
tails_option = input("What would you like Tails to represent? \n")

print()
print("The always correct coin flip suggests:")

if randomNum == 1:
    print(f"Heads- {heads_option}")
elif randomNum == 2:
    print(f"Tails- {tails_option}")
else:
    print("Double check your code, something went wrong.")
