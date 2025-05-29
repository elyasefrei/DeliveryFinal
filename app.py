from flask import Flask, render_template, request
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import numpy as np
import os

app = Flask(__name__)
model = load_model('model/best_model.h5')
IMG_SIZE = (224, 224)
class_names = ['acne', 'vitiligo', 'melanoma']

@app.route('/', methods=['GET', 'POST'])
def index():
    prediction = None
    image_url = None

    if request.method == 'POST':
        file = request.files['image']
        if file:
            path = os.path.join('static/uploaded', file.filename)
            file.save(path)

            # Prédiction
            img = image.load_img(path, target_size=IMG_SIZE)
            img_array = image.img_to_array(img) / 255.0
            img_array = np.expand_dims(img_array, axis=0)
            preds = model.predict(img_array)[0]
            prediction = {class_names[i]: float(preds[i]) for i in range(len(class_names))}
            image_url = path

    return render_template('index.html', prediction=prediction, image_url=image_url)

if __name__ == '__main__':
    app.run(debug=True)
