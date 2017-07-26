import os
from app import app,db
from app.models import User,Role
from flask_script import Manager,Shell
from flask_migrate import Migrate,MigrateCommand
from flask_cors import *

manager=Manager(app)
CORS(app, supports_credentials=True)
migrate=Migrate(app,db)
def make_shell_context():
    return dict(app=app,User=User,Role=Role,db=db)
manager.add_command("shell",Shell(make_context=make_shell_context))
manager.add_command('db',MigrateCommand)

if __name__=="__main__":
    manager.run()
