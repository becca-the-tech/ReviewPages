studyTopic = input("What did I study during this session: ");
studyTime = input("How long did I study: ")


file = open("./day3.csv", "a+")
file.write("Sat. 5/9/2020 ,");
file.write(studyTopic + ",")
file.write(studyTime + "\n")
file.close();
