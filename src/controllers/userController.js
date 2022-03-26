export function saveUser(userName) {
  localStorage.setItem('manutencao_leads_user', userName);
}

export function getUser() {
  return localStorage.getItem('manutencao_leads_user');
}
