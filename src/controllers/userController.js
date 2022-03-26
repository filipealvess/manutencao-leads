export function saveUser(userName) {
  localStorage.setItem('user', userName);
}

export function getUser() {
  return localStorage.getItem('user');
}
