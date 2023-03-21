import sys
import pandas as pd


d = {'col1': [1, 2], 'col2': [3, 4]}
df = pd.DataFrame(data=d)



# dataToSendBack = "This is from Python"
# print(dataToSendBack)
print(df.to_html())
sys.stdout.flush()


