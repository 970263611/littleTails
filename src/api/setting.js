import { api } from 'src/boot/axios'

export function getUserInfo(url, params) {
  return api({
    url: url,
    method: 'post',
    params: params
  })
}