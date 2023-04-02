import joblib
import json
import sys
import ast

# Load the input data and model path from the JSON input

args = sys.argv
# print(args)
# input_data = json.loads(input())
# model_path = input_data['modelPath']
# data = input_data['inputData']


model_path = args[1]
# print(model_path)
data = ast.literal_eval(args[2])

# print(data)

# Load the saved model from the file
model = joblib.load(model_path)

# Make predictions on the input data
predictions = model.predict(data)

# print(predictions)

# Send the predictions back to Node.js
print(json.dumps(predictions.tolist()))
# sys.stdout.flush()
