import sqlite3
from consts import dbname

connection = sqlite3.connect(dbname)
cursor = connection.cursor()

query = 'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username text, password text)'
cursor.execute(query)

query = 'CREATE TABLE IF NOT EXISTS parts (id INTEGER PRIMARY KEY, part text)'
cursor.execute(query)

query = 'CREATE TABLE IF NOT EXISTS stories (id INTEGER PRIMARY KEY, title text, description text)'
cursor.execute(query)

connection.commit()
connection.close()