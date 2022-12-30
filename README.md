# 模拟跨域
| 服务    | 端口 | 启动命令                    |
| ------- | ---- | --------------------------- |
| server1 | 4001 | cd server1 && node index.js |
| server2 | 4002 | cd server2 && node index.js |
| server3 | 4003 | cd server3 && node index.js |

其中涉及的内容包括基础的跨域请求，携带cookie，复杂请求，iframe跨域请求等

http://localhost:4001 打开控制台即可看到向4002的跨域请求，携带了4002的cookie。
http://localhost:4002 提供跨域的返回，提供`/api/cookie`向浏览器种cookie `a=1`。
http://localhost:4003 使用iframe加载4001的静态资源，携带cookie向4002发起跨域请求。

