print("Hello user.")
subject = input("What would you like to learn? ")
time = int(input("How long would you like to study? (in min)"))
reward = input("What kind of reward would you like afterward? ")

goals = input("What are your long term goals?")

print("Those are some great ideas.")
is_complete = input(f"When done studying {subject} for {time} minutes, type 'Y' or 'y'")

if is_complete == 'y' or is_complete == 'Y':
    print(f"Congratulations! You deserve this as a reward: {reward}")
else:
    print("Why have you not completed your task yet? Keep at it, persistence matters more than genius.")
    print(f"Remember, your long term goals are: {goals}")
