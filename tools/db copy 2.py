import sqlite3
from pymongo import MongoClient
import datetime

cluster = MongoClient("mongodb+srv://admin:54321@clusterpv-stcgg.gcp.mongodb.net/test?retryWrites=true&w=majority")
database = cluster['pns']
collection = database['minutes']

collection.insert_many([
    {
        'description': '',
        'date': datetime.datetime(2019, 9, 20),
        'document': '/minute_docs/Meeting_20_October_2019.pdf',
    },
    {
        'description': '',
        'date': datetime.datetime(2020, 2, 24),
        'document': '/minute_docs/Meeting_24_Febuary_2020.pdf',
    },
    {
        'description': '',
        'date': datetime.datetime(2020, 7, 5),
        'document': '/minute_docs/Meeting_05_July_2020.pdf',
    }
])

