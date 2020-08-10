import time
# from flask import Flask, request
import flask
from flask import request, Response, render_template

import os
import subprocess
import sys
import pandas
from shelljob import proc


app = flask.Flask(__name__)

@app.route('/time/',methods=['GET', 'POST'])
def get_current_time():
    # return {'time': time.time()}

    sentence = request.args.get('sentence')
    # sentence = "happy"


    prefix= "python main.py --all --config config.yml --type \""
    cmdEvaluation = prefix + sentence + "\""

    # result = os.system("python main.py --all --config config.yml --type \"hello anqiqi\"")
    # result = os.system(cmdEvaluation)


    # proc = subprocess.Popen(
    #     [cmdEvaluation],             #call something with a lot of output so we can see it
    #     shell=True,
    #     stdout=subprocess.PIPE
    # )

    # print("Received msg %s from JS socket" % cmdEvaluation)
    # print("Executing %s" % cmdEvaluation)
    # from shelljob import proc
    # g = proc.Group()
    # p = g.run(cmdEvaluation)
    # while g.is_pending():
    #    lines = g.readlines()
    #    for proc, line in lines:
    #        print(">>>>>",line)
    #     #    eventlet.sleep(0) 
   
    # return "done"


    def inner():
        proc = subprocess.Popen(
            [cmdEvaluation],             #call something with a lot of output so we can see it
            shell=True,
            stdout=subprocess.PIPE,
            universal_newlines=True # so fucking important....
        )

        for line in iter(proc.stdout.readline,''):
            time.sleep(1)                           # Don't need this just shows the text streaming
            yield line.rstrip() + '<br/>\n'
            # yield line.rstrip() + '\n'
            # print(line)
    
    return flask.Response(inner(), mimetype='text/html')  # text/html is required for most browsers to show th$


        # arr = ["18","2","3","9","10"]
        # for i in arr:
        #     time.sleep(1)
        #     yield i + '<br/>\n'
        #     # yield i


        # arr = ["18","2","3","9","10"]
        # for i in arr:
        #     time.sleep(1)
        #     print(i)
        #     yield i + '<br/>\n'
        #     # yield i


        # http works!
        # for i in range(5):
        #     yield '{}\n'.format(i)
        #     time.sleep(1)
    

    # return flask.Response(inner(), mimetype='text/html')  # text/html is required for most browsers to show th$
    # return "<h1>Hello React+Flask!</h1>"


    # arr = ["1","2","3"]
    # for i in arr:
    #     return i
    
    # for i in range(500):
    #     yield '{}\n'.format(sqrt(i))
    #     sleep(1)

    # return app.response_class(generate(), mimetype='text/plain')

    # return {'time': result}




@app.route('/stream')
def stream():
    def read_process():
        arr = ["18","2","3","9","10"]
        for i in arr:
            time.sleep(1)
            print(i)
            yield i + '\n'
            # yield i
    
    # sentence = request.args.get('sentence')
    sentence = "happy"


    prefix= "python main.py --all --config config.yml --type \""
    cmdEvaluation = prefix + sentence + "\""

    def inner():
        proc = subprocess.Popen(
            [cmdEvaluation],             #call something with a lot of output so we can see it
            shell=True,
            stdout=subprocess.PIPE,
            universal_newlines=True # so fucking important....
        )

        for line in iter(proc.stdout.readline,''):
            time.sleep(1)                           # Don't need this just shows the text streaming
            yield line.rstrip() + '<br/>\n'
            # yield line.rstrip() + '\n'
            # print(line)
    
    resp = flask.Response(inner(),
        mimetype='text/plain'
    )
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Access-Control-Allow-Credentials'] = 'false'
    resp.headers['Access-Control-Allow-Headers:'] = 'Content-Type,Connection,Server,Date'
    resp.headers['Access-Control-Allow-Methods'] = 'GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE, PATCH'
    resp.headers['X-Content-Type-Options'] = 'nosniff'

    resp.headers['Vary'] = '*'
    resp.headers['Accept-encoding'] = 'identity'
    resp.headers['Content-encoding'] = 'identity'
    resp.headers['Content-Encoding'] = 'compress'
    resp.headers['Transfer-encoding'] = 'identity'
    resp.headers['X-Powered-By'] = 'Express'

    return resp




@app.route('/streamtext')
def streamtext():
    def read_process():
        arr = ["18","2","3","9","10"]
        for i in arr:
            time.sleep(1)
            print(i)
            yield i + '\n'
            # yield i

    # return Response(
    #     read_process(),
    #     mimetype='text/plain',
    #     headers={'Content-Type': 'text/plain', 'Connection': 'keep-alive', 'Cache-Control': 'no-cache'}
    # )

    resp = flask.Response(read_process(),
        mimetype='text/plain'
    )
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Access-Control-Allow-Credentials'] = 'false'
    resp.headers['Access-Control-Allow-Headers:'] = 'Content-Type,Connection,Server,Date'
    resp.headers['Access-Control-Allow-Methods'] = 'GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE, PATCH'
    resp.headers['X-Content-Type-Options'] = 'nosniff'

    resp.headers['Vary'] = '*'
    resp.headers['Accept-encoding'] = 'identity'
    resp.headers['Content-encoding'] = 'identity'
    resp.headers['Content-Encoding'] = 'compress'
    resp.headers['Transfer-encoding'] = 'identity'
    resp.headers['X-Powered-By'] = 'Express'

    return resp

@app.route('/page')
def get_page():
    return flask.send_file('page.html')


@app.route('/')
def index():
    # render the template (below) that will use JavaScript to read the stream
    return render_template('index.html')

@app.route('/stream_sqrt')
def streaming():
    def generate():
        arr = ["18","2","3","9","10"]
        for i in arr:
            time.sleep(1)
            print(i)
            yield i + '\n'

    # return app.response_class(generate(), mimetype='text/plain')

    resp = flask.Response(generate(),
        mimetype='text/plain'
    )
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Access-Control-Allow-Credentials'] = 'false'
    resp.headers['Access-Control-Allow-Headers:'] = 'Content-Type,Connection,Server,Date'
    resp.headers['Access-Control-Allow-Methods'] = 'GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE, PATCH'
    resp.headers['X-Content-Type-Options'] = 'nosniff'

    resp.headers['Vary'] = '*'
    resp.headers['Accept-encoding'] = 'identity'
    resp.headers['Content-encoding'] = 'identity'
    resp.headers['Transfer-encoding'] = 'identity'
    resp.headers['X-Powered-By'] = 'Express'

    return resp