import { UserInfo } from "@/types";

export const login = async (body: {
  username: string;
  password: string;
}): Promise<UserInfo> => {
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...body,
      expiresInMins: 1, // optional
    }),
  });

  const data = await response.json();
  return data;
};

export const getUserInfo = async (token: string): Promise<UserInfo> => {
  const response = await fetch("https://dummyjson.com/auth/me", {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });

  const data = await response.json();
  return data;
};
