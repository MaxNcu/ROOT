import os
basedir=os.path.abspath(os.path.dirname(__file__))



class DevelopmentConfig():
    @staticmethod
    def init_app(app):
        pass

    SQLALCHEMY_COMMIT_ON_TEARDOWN = True
    SQLALCHEMY_DATABASE_URI = 'mysql://root:abc123@localhost/test'
    SQLALCHEMY_MIGRATE_REPO = os.path.join(basedir, 'db_repository')

config={
    'development':DevelopmentConfig,
    'default':DevelopmentConfig
}