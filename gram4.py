#Regular Expression
import xlrd 
import xlwt 
from xlwt import Workbook
import random
import json
import os
import sys



# Give the location of the file 

# To open Workbook 
wb1 = xlrd.open_workbook("./database.xlsx") 
sheet = wb1.sheet_by_index(0) 

answer = ""
# For row 0 and column 0 


rand_1 = random.randrange(0,200)
rand_2 = random.randrange(1,100)
# rand_3 = random.randrange(1,1000)
rand_4 = random.randrange(3,60)




def np(i,value):
    count = 1
    while(1):
        val_1 = sheet.cell_value(count, 0)
        # print(i)
        # print(val_1)
        if val_1[0]!=value[i]:
            count +=1
            # print("wrong")
        else:
            answer= val_1 + " "
            break
    return answer

def vp(i,value):
    count = 1
    while(1):
        val_1 = sheet.cell_value(count, 1)
        # print(i)
        # print(val_1)
        if val_1[0]!=value[i]:
            count +=1
            # print("wrong")
        else:
            answer= val_1 + " "
            break
    return answer

def adjp(i,value):
    count = 1
    while(1):
        val_1 = sheet.cell_value(count, 4)
        # print(i)
        # print(val_1)
        if val_1[0]!=value[i]:
            count +=1
            # print("wrong")
        else:
            answer= val_1 + " "
            break
    return answer

def advp(i,value):
    count = 1
    while(1):
        val_1 = sheet.cell_value(count, 2)
        # print(i)
        # print(value[3])
        # print(val_1)
        if val_1[0]!=value[i]:
            count +=1
            # print("wrong")
        else:
            answer= val_1 + " "
            break

    return answer

# val_2 = sheet.cell_value(rand_2,1)
# # val_1 = x = sheet.cell_value(0, rand1)
# val_4 = sheet.cell_value(rand_4,3)

# answer = val_1 + " " + val_2 + " " + val_4


value = json.loads(sys.argv[1])['post']
count = len(value)


if count == 5:
    answer = np(0,value) + np(1,value) + vp(2,value) + advp(3,value) + adjp(4,value)

if count ==4:
    answer = np(0,value) + vp(1,value) + advp(2,value) + adjp(3,value)

print(answer)
# val_1 = sheet.cell_value(20, 2)
# print(val_1)