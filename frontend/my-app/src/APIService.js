export default class APIService {
  static UpdateArticle(article_id, body) {
    return fetch(`http://127.0.0.1:8000/api/articles/${article_id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token 612a75c0cd160e9cb19034b3dd63fe660f9ffc82",
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }
}