from collections import Counter
import json
import os

# TODO: load all data.txt files from random_test_outputs
all_data = []
ending_counts = Counter()
for filename in os.listdir('random_test_outputs'):
    if filename.endswith('_data.txt'):
        with open('random_test_outputs/' + filename) as f:
            data = json.load(f)
        all_data.append(data)
        for key in data['qualities'].keys():
            if key.startswith('achievement_ending'):
                ending_counts[key] += 1
                break

print(ending_counts.most_common())
print('a_path: ', Counter([x['qualities']['a_path'] for x in all_data]))
print('k_path: ', Counter([x['qualities']['k_path'] for x in all_data]))

print('data_seen: ', Counter([x['qualities']['data_seen'] for x in all_data]))
print('r_seen: ', Counter([x['qualities']['r_seen'] for x in all_data]))
print('c_seen: ', Counter([x['qualities']['c_seen'] for x in all_data]))
print('l_seen: ', Counter([x['qualities']['l_seen'] for x in all_data]))
