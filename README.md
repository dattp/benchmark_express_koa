##### ENV test local:

- Macbook Pro 2015
- 2 core i5 4 thread
- 8 GB RAM
- 1 process node
- node v14.17.6

##### RUN server

```
# Express
node express.js

#Koa
node koa.js
```

##### RUN k6 test: 3 times

```
k6 run --vus 100 --iterations 100000 request_get.k6.js
```

##### Result average

| Framework | api | %CPU | RPS | Total Time | P95 |
| :--------:|:---:|:----:|:---:|:----------:|:---:| 
| Express | GET:/ | 76 | 3000 | 31 s |57 ms|
| Koa | GET:/ | 53 | 5700 | 18s | 35 ms |
