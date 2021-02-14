import random

word_list = ["aardvark", "baboon", "camel"]

chosen_word = random.choice(word_list)

#guess= input("Guess a letter: ").lower()

display = []

for letter in chosen_word:
    display.append('_')

print("Chosen word was: " + chosen_word)
print(display)

end_of_game = False

#either while option below works properly
#while '_' in display:
#while display.count('_') >= 1:
while not end_of_game:
    guess = input("Guess a letter: ").lower()
    counter = 0

    for letter in chosen_word:
        if letter == guess:
            display[counter] = guess
        counter += 1

    print(display)
    if not '_' in display:
        end_of_game = True
