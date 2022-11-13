from flask import Flask, render_template, request

app   = Flask(__name__, static_url_path='/static')
app.config['SECRET_KEY'] = 'asd82a'
app.config['UPLOAD_FOLDER'] = 'static/files'

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/register')
def register():
    return render_template('register.html')


if __name__ == '__main__':
    app.run(host="localhost", port=5000, debug=True)