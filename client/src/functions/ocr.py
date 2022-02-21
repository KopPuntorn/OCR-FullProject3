import json
import boto3
import re
from flask.app import Flask
import pytesseract
from PIL import Image
from io import BytesIO
from flask import *
#import pymongo


app=Flask(__name__)

@app.route('/lambda_handler/<event>', methods=['POST'])
def lambda_handler(event): 
    
    #s3BucketName = "react-ap-ocrrealtime-images"
    #filePath= event;
    #filePath = "page0.jpg"
    #documentName = filePath


#myclient = pymongo.MongoClient("mongodb://localhost:27017/db_scout")
#mydb = myclient["mydatabase"]
#mycol = mydb["customers"]
#x = mycol.find_one()
#print(x)
    s3 = boto3.resource(
        service_name='s3',
        region_name='ap-southeast-1',
        aws_access_key_id='AKIAYD7GVQPKY3MGH57W',
        aws_secret_access_key='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'
    )

    for bucket in s3.buckets.all():
        print(bucket.name)

    for obj in s3.Bucket("react-ap-ocrrealtime-images").objects.all():
        #key = obj.key
        body = obj.get()['Body'].read()
    

        img = Image.open(BytesIO(body))
        #img = Image.open(body)
    
    ocr = pytesseract.image_to_string(img, lang = 'tha+eng')
    
    result=[]
    processedResult=""
   
        
    print (processedResult)
    res=[]
    bad_chars = [';', ':', '!', "*", ']', "[" ,'"', "{" , "}" , "'",",","เรื่อง","วันที่","เรียน","ส่วนราชการ","ลง 18 กันยายน 2558  ขอเสนอชื่อผู้รับทุนวิจัยสําหรับ"]
    bad_chars_date = ['JS']
    number=""
    subject=""
    date=""
    ffrom="บัณฑิตวิทยา"
    to=""
    
    #ดึงเลขหนังสือด้วย regex
    numberF = re.findall("ศธ\s.*", ocr)
    number = numberF[0]

    #ตัดตัวอักษรที่ไม่ต้องการออกจากข้อความที่ regex มา
    for i in bad_chars:
        number = str(number).replace(i,'')

    if len(number)>0 :
        res.append(str(number))
    else:
        res.append('')


        
    #ดึงเรื่องด้วย regex
    subjectF = re.findall("เรื่อง\s.*", ocr) 
    subject = subjectF[0]
    #ตัดตัวอักษรที่ไม่ต้องการออกจากข้อความที่ regex มา
    for i in bad_chars:
        subject = str(subject).replace(i,'')

    if len(subject)>0 :
        res.append(str(subject))
    else:
        res.append('')

    #ดึงวันที่ด้วย regex
    dateF = re.findall("วันที่\s.*", ocr) 
    date= dateF[0]
    #ตัดตัวอักษรที่ไม่ต้องการออกจากข้อความที่ regex มา
    for i in bad_chars:
        date = str(date).replace(i,'')
    for i in bad_chars_date:
        date = str(date).replace(i,'')

    if len(date)>0 :
        res.append(str(date))
    else:
        res.append('')

    #ดึงจากใครด้วย regex
    #ffrom = re.findall("ส่วนราชการ\s.*", ocr) 
    
    #ตัดตัวอักษรที่ไม่ต้องการออกจากข้อความที่ regex มา
    #for i in bad_chars:
    #    ffrom = str(ffrom).replace(i,'บัณฑิตวิทยา')

    if len(ffrom)>0 :
        res.append(str(ffrom))
    else:
        res.append('')

    #ดึงถึงใครด้วย regex
    toF = re.findall("เรียน\s.*", ocr) 
    to = toF[0]
    #ตัดตัวอักษรที่ไม่ต้องการออกจากข้อความที่ regex มา
    for i in bad_chars:
        to = str(to).replace(i,'')

    if len(to)>0 :
        res.append(str(to))
    else:
        res.append('')






    #Fdata = [4, subject[0],date[0]]
    #print(Fdata)

    return {
        'statusCode': 200,
        #'body': JSON.stringify(result)
        'body': res
        
    }
    

app.run(host='localhost', port=8989)