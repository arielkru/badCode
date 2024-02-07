import os
from flask import Flask, request
import bleach
app = Flask(__name__)
# comment
# curl -X GET "http://localhost:5000/tainted7/touch%20HELLO"
@app.route("/tainted7/<something>")
def test_sources_7(something):
# comment
    os.system(request.remote_addr)
# comment
    return "foo"
# comment
@app.route("/sanitized/<something>")
def test_sources_7(something):
    data = flask.request.args.get("key")
    sanitized_data = bleach.clean(data)
    os.system(sanitized_data)
# comment
    return "bar"
# comment
if __name__ == "__main__":
	app.run(debug=True)
