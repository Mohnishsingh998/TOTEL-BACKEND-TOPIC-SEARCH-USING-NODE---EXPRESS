# 🚀 TOTLE - Backend Developer Internship Round 2

This project contains two implementations of a **Topic Retrieval API** as part of the TOTLE Backend Developer Internship Round 2 assignment:

1. ✅ `totle-topic-api-using-express` — built using **Node.js with Express**
2. ✅ `totle-topic-api-using-only-node` — built using **pure Node.js**, without any frameworks

---

## 📂 Project Structure
├── totle-topic-api-using-express\
│   ├── app.js\
│   ├── controllers\
│   ├── data\
│   ├── node_modules\
│   ├── package-lock.json\
│   ├── package.json\
│   └── routes\
└── totle-topic-api-using-only-node\
├── app.js\
├── data\
├── node_modules\
├── package-lock.json\
└── package.json\


---

## 🧪 API Endpoint (Common to Both)

### `GET /api/topics?search=<query>&sort=name`

- Filters topics by **name** (case-insensitive).
- Optional `sort=name` query will return results sorted alphabetically.

---

## 🌐 Example URLs

http://localhost:3000/api/topics?search=java
http://localhost:3000/api/topics?search=programming&sort=name


---

## 📦 How to Run the Projects

### ✅ 1. Using Express (`totle-topic-api-using-express`)

#### 📁 Navigate to the folder:
```bash
cd totle-topic-api-using-express
npm install
node app.js

---
### ✅ 2. Using Express (`totle-topic-api-using-only-node`)

#### 📁 Navigate to the folder:
```bash
cd totle-topic-api-using-only-node
npm install
node app.js


