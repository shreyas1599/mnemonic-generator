import sys
import json
from nltk.corpus import reuters
from nltk import bigrams, trigrams
from collections import Counter, defaultdict
from nltk import sent_tokenize
from nltk import word_tokenize
import os
import random


parsed = json.loads(sys.argv[1])['post'][2:]



# Create a placeholder for model
model = defaultdict(lambda: defaultdict(lambda: 0))

# Count frequency of co-occurance  
for sentence in reuters.sents():
    for w1, w2, w3 in trigrams(sentence, pad_right=True, pad_left=True):
        model[(w1, w2)][w3] += 1
 
# Let's transform the counts to probabilities
for w1_w2 in model:
    total_count = float(sum(model[w1_w2].values()))
    for w3 in model[w1_w2]:
        model[w1_w2][w3] /= total_count
value="a"
# for i in value:
x = 1
first_word = "today"
second_word = "the"

value = parsed
# print(first_word)
# print(second_word)
answer = first_word + " " + second_word + " "
for i in value:
    # print(first_word)
    my_dict = dict(model[first_word,second_word])
    possibilities = []
    # print(my_dict)
    x = list(my_dict)
    for j in x:
        if j[0]==i:

            first_word = second_word
            second_word = j
            break
    # print(first_word)
    # print(second_word)
    # possibilities = []
    # print(possibilities)
    answer += second_word + " "
print(answer)
