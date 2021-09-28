##### Môi trường test local:

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

##### RUN k6 test

```
k6 run --vus 100 --iterations 100000 request_get.k6.js
```

##### Result
