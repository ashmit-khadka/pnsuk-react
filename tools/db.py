import sqlite3
from pymongo import MongoClient

cluster = MongoClient("mongodb+srv://admin:54321@clusterpv-stcgg.gcp.mongodb.net/test?retryWrites=true&w=majority")
database = cluster['pns']
eventsCollection = database['content']
memberCollection = database['members']

conn = sqlite3.connect('db.sqlite3')
cur = conn.cursor()


content = {
    'management': 'member_member',
    'advisor': 'member_advisor',
    'trustee': 'member_trustee',
}

members = []
memberCollection.drop()
for memberType in content:
    print(memberType)
    for row in cur.execute('SELECT * FROM ' + content[memberType]):
        #print(row)
        picture = ''
        role = ''
        if memberType == 'management' and len(row[5]):
            picture = 'members/' + row[5]
            role = row[2]
        elif memberType == 'trustee' and len(row[3]):
            picture = 'members/trustee/' + row[3][len('https://i.ibb.co/bmt6GJd/'):]
            role = row[2]


        event = {
            'name': row[1],
            'position': role,
            'type': memberType,
            'image': picture,
        }
        print(event)
        memberCollection.insert_one(event)

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