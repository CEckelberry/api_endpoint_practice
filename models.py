from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


def connect_db(app):
    """connect to the database"""
    db.app = app
    db.init_app(app)


class Cupcake(db.Model):
    """Models for Cupcake app."""

    __tablename__ = "cupcakes"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)

    flavor = db.Column(db.Text, nullable=False)

    size = db.Column(db.Text, nullable=False)

    rating = db.Column(db.Float, nullable=False)

    image = db.Column(
        db.Text, nullable=False, default="https://tinyurl.com/demo-cupcake"
    )
