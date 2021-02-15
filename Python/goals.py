import random


def choose_goals():
    goal_list = []
    goal = input("What is a goal of yours? Type 'n' to quit. \n").lower()

    while not goal == 'n':
        goal_list.append(goal)
        goal = input("What is a goal of yours? Type 'n' to quit. \n").lower()

    for item in goal_list:
        print(f"Your goal is to {item}.")
        encourage()
        print()


def encourage():
    encouragement_list = [
        "You got this!", "One step at a time and you can reach any goal!",
        "You are building up those neural links to achieve anything.",
        "Never forget what you are capable of.",
        "Don't listen to anyone who discourages you.",
        "Just believe you can, and eventually you will.",
        "Focus and consistency win.",
        "With every study session you are building the life you want."
    ]

    print(random.choice(encouragement_list))


choose_goals()
process = input(
    "What are the next steps for these goals? How do you plan to accomplish them? \n"
)
