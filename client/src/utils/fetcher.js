import { api } from "../api/api"

export const fetcher = url => api.get(url).then(res => res.data)
