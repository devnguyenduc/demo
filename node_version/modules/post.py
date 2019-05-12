#coding="utf-8"
from date_time import DateTime
import json

#Hàm này dùng đẻ convert 1 chuỗi phân tách nhau bằng đấu phẩy thành 1 mảng các giá trị
#Trong frame này dùng để tách chuỗi các thuộc tính tag ra thành 1 mang các tag
def convert_str_to_array(str_tag):
    array_tag = str_tag.split(",")
    list_tag = list()
    for x in array_tag:
        list_tag.append(x)
    clone = list_tag[:]
    return clone


### Ta xây dựng 1 class Post có 3 tính năng:
## +1 là nhận vào các giá trị của 1 bài viết cơ bản như tiêu đề , thư mục, mô tả, id, tag và nội dung của các bài viết
## +2 là tạo ra 1 post bỏ trống để có thể nhận vào các giá trị từ 1 file Json.
## +3 Trả về 1 chuỗi Json hoặc 1 Dictionary chứa các thuộc tính.

class Post:
    def __init__(self,title="",category="",describes="",id="",tag="",content="",times = 0,datetime=DateTime()):
        self.title = title
        self.category = category
        self.describes = describes
        self.id = id
        if type(tag) is str:
            self.tag = convert_str_to_array(tag).copy()
        elif type(tag) is list:
            self.tag = tag.copy()
        self.content = content
        self.date = datetime
        self.times = times

    def set_date(self,datetime=DateTime()):
        self.date = datetime

    def date(self):
        return self.date

    def set_post(self,title="",category="",describes="",id="",tag="",content="",datetime=DateTime()):
        self.title = title
        self.category = category
        self.describes = describes
        self.id = id
        if type(tag) == str:
            self.tag = convert_str_to_array(tag).copy()
        elif type(tag) == list:
            self.tag = tag[:]
        self.content = content
        self.date = datetime

    def set_title(self,title):
        try:
            self.title = title
        except e:
            print(e)
    
    def get_title(self):
        return self.title

    def set_category(self,category):
        try:
            self.category = category
        except e:
            print(e)

    def get_category(self):
        return self.category

    def set_describes(self,describes):
        try:
            self.describes = describes
        except e:
            print(e)
        

    def set_id(self,id):
        try:
            self.id = id
        except e:
            print(e)
        
    
    def get_id(self):
        return self.id

    def set_tag(self,tag):
        try:
            if type(tag) == str:
                self.tag = convert_str_to_array(tag).copy()
            elif type(tag) == list:
                self.tag = tag[:]
        except e:
            print(e)
        

    def get_tag(self):
        return self.tag

    def set_content(self,content):
        try:
            self.content = content
        except e:
            print(e)
        

    def get_content(self):
        return self.content

    def convert_dictionary(self):
        self.dictionary = {
            "title" : self.title,
            "category": self.category,
            "describes": self.describes,
            "id": self.id,
            "content": self.content,
            "tag" : self.tag,
            "times": self.times,
            "date" : self.date
        }
    
    def get_post(self):
        self.times += 1
        return self.dictionary

    ## Phương thức này trả về 1 chuỗi Json 
    def get_json(self):
        return json.dumps(self.dictionary,indent= 4)

    ## Phương thức này dùng để nhận vào 1 post đã có sẵn 
    def set_post_from_json(self,json_post):
        _dict = json.loads(json_post)
        self.title = _dict.title
        self.describes = _dict.describes
        self.category = _dict.category
        self.tag = _dict.tag[:]
        self.content = _dict.content
        self.times = _dict.times
        self.set_date(_dict.date)