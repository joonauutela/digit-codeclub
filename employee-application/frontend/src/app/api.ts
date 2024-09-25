export const API_BASE_URL = process.env.API_URL;

export const DEFAULT_OPTIONS: RequestInit = {
  method: "get",
  cache: "no-cache",
  headers: new Headers({
    "x-api-key": process.env.API_KEY!,
    "Content-Type": "application/json",
  }),
};
