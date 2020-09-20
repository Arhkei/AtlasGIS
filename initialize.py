from flask import Flask,render_template

app = Flask(__name__)
@app.route('/')

def map_func():
    data = []
    keyword = "vaccine"
    
    tweetText = open("data/tweetText.txt", "r", encoding="utf-8")
    textData = tweetText.read()
    tweetText.close()
    data.append(textData)
    
    covidFile = open("data/covid.txt", "r")
    covidData = covidFile.read()
    covidFile.close()
    data.append(covidData)
    
    tweetFile = open("data/covid-tweets.txt", "r")
    tweetData = tweetFile.read()
    tweetFile.close()
    data.append(tweetData)
    
    data.append(keyword)
    return render_template('map.html', data=data)

if __name__ == '__main__':
    app.run(debug = True) 
