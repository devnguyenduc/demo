from flask import Flask, render_template,request,url_for
from werkzeug import secure_filename
import json
app = Flask(__name__)

class admin:
    def __init__(self,top,logo):
        self.top_banner = top
        self.logo = logo


@app.route("/")
def home():
    b = '<img src="helloworld"/>'
    a = admin("asd","asd")
    return render_template("index.html",index=a,testimg = b)

@app.route('/admin')
def admin_page():
    ab = admin("ads","ads")
    return render_template("admin.html",index=ab)
@app.route('/admin/source/upload',methods=["POST","GET"])
def source_upload():
    f = request.files.getlist("file_upload[]")
    success = "Thành công"
    for x in f:
        x.save("static/img/" + secure_filename(x.filename))
    return render_template("upload_success.html",result = success)

@app.route("/admin/source/<imgname>/valid")
def view_source(imgname):
    return url_for('static',filename = imgname)

@app.route("/admin/function/create_new_post.py",methods=["POST"])
def get_post():
    get_tag = request.form["tag"]
    array_tag = get_tag.split(",")
    tag = list()
    for x in array_tag:
        tag.append(x)

    post = {
        "title" : request.form["title"],
        "category": request.form["category"],
        "describes": request.form["describes"],
        "id" : request.form["id"],
        "tag": tag,
        "content" : request.form["content"],
    }
    str_post = json.dumps(post)
    path = "src/" + post["title"] + ".json"
    file = open(path,"w")
    file.write(str_post)
    file.close()
    return render_template("upload_success.html")

if __name__ == "__main__":
    app.run(debug = True)
