current_goal = input("What is your current goal? ")

current_month = int(input("What is the current month? (use numbers) "))
current_day = int(input("What is the current date? "))
print()

goal_month = int(input("What is the goal month? (use numbers) "))
goal_day = int(input("What is the goal date? "))


#if current_month is 12, goal_month is 3
def check_month(current_month, goal_month):
    if goal_month < current_month:
        months_difference = (12 - current_month) + goal_month
        print(f"{months_difference} months difference")
    elif goal_month == current_month:
        months_difference = 0
        print("happens in the same month")
    else:
        months_difference = goal_month - current_month
        print(f"{months_difference} months difference")
    return months_difference


#simplifying by assuming months all have 30 days
#current_day counts days left, whereas goal_day counts up from current mont
# def check_date(current_day, goal_day):
#   days_difference = (goal_day - current_day)
#   months_in_days = check_month(current_month, goal_month) * 30
#   total_days = days_difference + months_in_days
#   print(f"{days_difference} days difference")
#   print(f"{total_days} total days difference")


def days_in_month(month):
    if month == 1:
        return 31
    elif month == 2:
        return 28
    elif month == 3:
        return 31
    elif month == 4:
        return 30
    elif month == 5:
        return 31
    elif month == 6:
        return 30
    elif month == 7:
        return 31
    elif month == 8:
        return 31
    elif month == 9:
        return 30
    elif month == 10:
        return 31
    elif month == 11:
        return 30
    elif month == 12:
        return 31
    else:
        return 0


#check_date(current_day, goal_day)


def days_to_end_of_month(current_day, current_month):
    if current_month == goal_month:
        return goal_day - current_day

    end_month_date = days_in_month(current_month)
    days_left_in_first_month = end_month_date - current_day

    return days_left_in_first_month


def days_from_beginning_to_goal_date(goal_day):
    if goal_month == current_month:
        return 0
    days_from_beginning = goal_day
    return goal_day


#cannot be consecutive months
#current month 2, goal_month 4
def days_for_months_between_goals(current_month, goal_month):
    if current_month - goal_month == 1:
        return 0
    elif goal_month - current_month == 1:
        return 0
    elif current_month == goal_month:
        return 0
    elif goal_month - current_month > 0:
        #goal month 4, current month 2
        total = 0
        for i in range(current_month + 1, goal_month):
            total += days_in_month(i)
        #print(f"{total} days for months between")
        return total
    #TODO:: still working on if goal month is in a new year
    #elif current_month - goal_month > 0:
    #  total = 0
    #  if goal_month < 12:
    #    goal_month += 12


def total_days():
    total = 0
    total += days_to_end_of_month(current_day, current_month)
    #print(f"{total} total after adding days to end of month")
    total += days_from_beginning_to_goal_date(goal_day)
    #print(f"{total} total after adding days from beginning of goal month")
    total += days_for_months_between_goals(current_month, goal_month)
    print(f"{total} total days between now and goal")


total_days()
print(f"To accomplish your goal of: {current_goal}")
