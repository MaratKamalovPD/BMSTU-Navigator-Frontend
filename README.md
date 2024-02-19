## Сервер с фронтендом навигатора по МГТУ

Технологии: **ExpressJS, PostgreSQL**

### Для разрабов

Перед запуском необходимо

1. Прописать свой конфиг в переменные среды (в файл .env) для БД

*Пример файла*

```
PORT=8080
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=nav
```

2. Установить все зависимости
   

```npm i```


3. Запустить проект
   
```npm run dev``` - режим разработки

```npm run start``` - прод режим


## Некоторые требования к данным

Следует именовать все названия помещений (коридоров и комнат в следующем формате)

`BUILDINGNAME_FLOOR_NAMEFROMMAP`

В проекте должна быть ссылка на материалы (планы и схемы), где разработчик помечал на карте название прямо на схеме,
чтобы удобно было модерировать данные из БД и данные с планов.
