const STORAGE_KEY = "blogPosts";

function getPosts() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function savePosts(posts) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}

function generateId() {
  return Date.now().toString();
}
