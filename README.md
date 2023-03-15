### Result

* Express

 | vusers.created_by_name.Testando | vusers.created | http.requests | http.codes.200 | http.responses | vusers.failed | vusers.completed | http.request_rate |
| ------------------------------- | -------------- | ------------- | -------------- | -------------- | ------------- | ---------------- | ----------------- |
| 106000                          | 106000         | 318000        | 318000         | 318000         | 0             | 106000           | 1161              |



* Fastify

| vusers.created_by_name.Testando | vusers.created | http.requests | http.codes.200 | http.responses | vusers.failed | vusers.completed | http.request_rate |
| ------------------------------- | -------------- | ------------- | -------------- | -------------- | ------------- | ---------------- | ----------------- |
| 106000                          | 106000         | 318000        | 318000         | 318000         | 0             | 106000           | 528               |





#### Http Response Time
* Express

| min | max  | count  | p50  | median | p75  | p90   | p95   | p99   | p999 |
| --- | ---- | ------ | ---- | ------ | ---- | ----- | ----- | ----- | ---- |
| 0   | 1386 | 318000 | 21.1 | 21.1   | 89.1 | 333.7 | 478.3 | 713.5 | 944  |

* Fastify

| min | max | count  | p50  | median | p75  | p90   | p95   | p99 | p999  |
| --- | --- | ------ | ---- | ------ | ---- | ----- | ----- | --- | ----- |
| 0   | 706 | 318000 | 12.1 | 12.1   | 58.6 | 125.2 | 183.1 | 308 | 487.9 |

### Specs
| Memory | CPUs Core |
| ------ | --------- | 
| 23.8GB |     4     |
