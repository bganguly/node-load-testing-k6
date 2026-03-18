# Load Testing a Node API with k6

This project demonstrates how to simulate concurrent traffic against a Node.js API and measure performance under load.

It is part of a broader scalability series, used alongside a Redis caching demo to show performance improvements.

---

## 🧠 What This Project Shows

* How to generate load using k6
* Measuring API latency under concurrent users
* Baseline performance before optimization
* Foundation for comparing caching improvements

---

## ⚙️ Tech Stack

* Node.js (API under test)
* k6 (load testing)

---

## 🏗️ Architecture

```
k6 (load generator)
        ↓
Node API (localhost:3000)
```

---

## 🚀 Load Test Configuration

```js
export const options = {
  vus: 50,
  duration: '10s',
};
```

* Virtual Users: 50
* Duration: 10 seconds
* Endpoint: `/api/data`

---

## ▶️ How to Run

### 1. Start the API server (from another repo)

```bash
node index.js
```

---

### 2. Run load test

```bash
k6 run load.js
```

---

## 📊 Example Results


Reference image: [redi_results.png](redi_results.png)

---

## 🔍 What to Look For

* Average request duration
* Throughput under load
* Stability of response times

---

## 🔗 Related Project

👉 Redis caching version (shows optimization on top of this baseline)

---

## 🧭 Key Takeaways

* Load testing helps identify bottlenecks early
* Even simple APIs degrade under concurrency
* Baselines are essential before optimization

