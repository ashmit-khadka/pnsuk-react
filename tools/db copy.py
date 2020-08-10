import sqlite3
from pymongo import MongoClient

cluster = MongoClient("mongodb+srv://admin:54321@clusterpv-stcgg.gcp.mongodb.net/test?retryWrites=true&w=majority")
database = cluster['pns']
eventsCollection = database['content']
articlesCollection = database['articles']

conn = sqlite3.connect('db.sqlite3')
cur = conn.cursor()


content = {
    'event': 'home_event_past',
    'guest': 'home_guest',
    'project': 'home_project',
}

members = []
articlesCollection.drop()
for articleType in content:
    print(articleType)
    for row in cur.execute('SELECT * FROM ' + content[articleType]):
        print(row)
        title = row[1]
        image = ''
        date = ''
        text = ''
        type = ''
        event = False
        aid = False
        project = False
        guest = False
        home = False

        if articleType == 'event' and not row[7]:
            image = row[2]
            date = row[3]
            text = row[4]
            event = True
            if row[5]: home == True

        elif articleType == 'event' and row[7]:
            image = row[2]
            date = row[3]
            text = row[4]
            event = True
            aid = True
            if row[5]: home == True

        elif articleType == 'guest' and len(row[3]):
            image = row[6]
            date = row[2]
            text = row[3]
            guest = True

        elif articleType == 'project' and len(row[3]):
            image = row[6]
            date = row[2]
            text = row[3]
            project = True

        article = {
            'title': row[1],
            'image': image,
            'date': date,
            'text': text,
            'event': event,
            'aid' : aid,
            'guest': guest,
            'project': project,
            'home': False,
        }
        print(article)
        articlesCollection.insert_one(article)

'''
for row in cur.execute('SELECT * FROM home_event_past'):
    print(row)
    event = {
        'title': row[1],
        'img': row[2],
        'date': row[3],
        'text': row[4],
        'home': True if row[5] else False,
        'news': True if row[6] else False,
        'aid': True if row[7] else False,
    }
    print(event)
    #eventsCollection.insert_one(event)
'''