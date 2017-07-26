# -*- coding:utf-8 -*- 
from flask import Flask,render_template,jsonify,request
import re
from app import app
import os
from .import db
from .models import User
temp_Path=os.path.abspath('.')
import chardet

@app.route('/')
def index():
    return "<h1>Hello</h1>"

@app.route('/getcountry',methods=['GET','POST'])
def getcountry():
    tag=request.args.get('tag',"none")
    country=request.args.get('country',"none")
    distinct=request.args.get('distinct',"none")
    print "tags:"+tag
    print "country:"+country
    print "distinct:"+distinct
    result=[]
    country=re.sub(u'[\u4e00-\u9fa5]','',country)
    if tag=='distinct':     
        filename=country+'-distinct.xml'
        Path=os.path.join(temp_Path,'app','static','data',filename)
        f=open(Path)
        details=f.read().split('\n')

        for detail in details:
            s=detail.split(':')
            chardit=chardet.detect(s[1])
            print s[1].decode('utf-8')
            print chardit
            result.append(detail)
        return jsonify(result=result)
    if tag=='city':
        distinct=distinct.split('1')[1]
        distinct=distinct.encode('utf-8')
        filename=country+'.xml'
        Path=os.path.join(temp_Path,'app','static','data',filename)
        f=open(Path)
        details=f.read().split('\n')
        distinct=re.sub(u'[\u4e00-\u9fa5]','',distinct)
        for detail in details:
            city=[]
            detail=detail.split(':',1)
            if len(detail)>1:
                test=detail[0]
                if distinct in test:
                    print detail[1].decode('utf-8')
                    result.append(detail[1])
            else:
                print detail
        return jsonify(result=result)
