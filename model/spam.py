from flask import Flask, jsonify, request
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import MultinomialNB
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
# Load data
data = pd.read_csv('c:/Users/sujal/OneDrive/Desktop/Inhouse-code/alertWise/model/data/spam.csv', encoding='latin1')

# Separate features and target
X = data['v2']
y = data['v1'].map({'ham': 0, 'spam': 1})

# Vectorize text data
vectorizer = CountVectorizer()
X = vectorizer.fit_transform(X)

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train Naive Bayes classifier
classifier = MultinomialNB()
classifier.fit(X_train, y_train)

@app.route('/predict', methods=['POST'])
def predict_message():
    # Get data from JSON payload
    data = request.get_json()
    message = data.get('message', '')

    # Vectorize the message
    message_vectorized = vectorizer.transform([message])

    # Predict
    prediction = classifier.predict(message_vectorized)
    result = "spam" if prediction[0] == 1 else "ham"

    return jsonify({'prediction': result})

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0', port=5000)
