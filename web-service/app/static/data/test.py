# -*- encoding:utf-8 -*-
import re
import chardet
'''
test="fuck中文"
chardit=chardet.detect(test)
print chardit
news=re.sub(u'[\u4e00-\u9fa5]','',test.decode('utf-8'))
print test.decode('utf-8')
print news
'''
f=open('Italy.xml')
details=f.read().split('\n')
for detail in details:
    test=detail.split(':')[0]
    if "莫利塞" in test:
        print detail
