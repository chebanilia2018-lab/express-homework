# Express Server Project

## Описание
Этот проект сделан в рамках учебного занятия по Node.js и Express.js.  
Сервер обрабатывает простые HTTP запросы и использует структуру MVC.

---

## Технологии
- Node.js
- Express
- body-parser
- nodemon

---

## Установка

1. Установить зависимости:

npm install


2. Запустить проект в режиме разработки:

npm run dev


---

## Сервер

После запуска сервер работает на:

http://localhost:3000


---

## Маршруты

### Главный маршрут
- GET `/` — Get root route

---

### Users

- GET `/users` — Get users route  
- POST `/users` — Post users route  
- GET `/users/:userId` — Get user by Id route  
- PUT `/users/:userId` — Put user by Id route  
- DELETE `/users/:userId` — Delete user by Id route  

---

### Articles

- GET `/articles` — Get articles route  
- POST `/articles` — Post articles route  
- GET `/articles/:articleId` — Get article by Id route  
- PUT `/articles/:articleId` — Put article by Id route  
- DELETE `/articles/:articleId` — Delete article by Id route  

---

## Структура проекта

- routes — маршруты
- controllers — логика обработки запросов
- middlewares — логирование
- models — данные (JSON)

---

## Примечание
Проект учебный и сделан для изучения работы Express.js и маршрутизации.