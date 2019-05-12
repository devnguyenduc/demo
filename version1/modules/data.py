#coding=utf-8
import os
database = '../src/'
dot = '.json'

class Data:
    def __init__(self):
        self._id = 0

    def insert(self,data):
        try:
            path = database + data.id + dot
            if os.path.exists(path):
                return False
            else:
                file = open(path,"w+")

        except e: