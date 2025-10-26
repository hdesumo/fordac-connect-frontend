import axios from "axios";

export const API_BASE_URL = "https://api.fordac-connect.org";

export async function registerMember(data: any) {
  const res = await axios.post(`${API_BASE_URL}/api/members/register`, data);
  return res.data;
}

export async function getMembers() {
  const res = await axios.get(`${API_BASE_URL}/api/members`);
  return res.data;
}

export async function loginMember(data: any) {
  const res = await axios.post(`${API_BASE_URL}/api/members/login`, data);
  return res.data;
}
