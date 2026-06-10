from flask import Flask, jsonify, request
from flask_cors import CORS
from database import get_connection

app = Flask(__name__)
CORS(app)

@app.route("/api/posts", methods=["GET"])
def get_posts():
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT id, name, description FROM posts")
    rows = cursor.fetchall()
    cursor.close()
    conn.close()
    posts = [{"id": row[0], "name": row[1], "description": row[2]} for row in rows]
    return jsonify(posts)

@app.route("/api/posts", methods=["POST"])
def create_post():
    data = request.get_json()
    name = data["name"]
    description = data["description"]
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO posts (name, description) VALUES (%s, %s) RETURNING id, name, description",
        (name, description)
    )
    row = cursor.fetchone()
    conn.commit()
    cursor.close()
    conn.close()
    post = {"id": row[0], "name": row[1], "description": row[2]}
    return jsonify(post), 201

@app.route("/api/posts/<int:post_id>", methods=["DELETE"])
def delete_post(post_id):
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute(
        "DELETE FROM posts WHERE id = %s RETURNING id, name, description",
        (post_id,)
    )
    row = cursor.fetchone()
    conn.commit()
    cursor.close()
    conn.close()
    post = {"id": row[0], "name": row[1], "description": row[2]}
    return jsonify(post)

if __name__ == "__main__":
    app.run(debug=True)