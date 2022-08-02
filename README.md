# Проект: Место
## Стэк: HTML + CSS + JavaScript
Описание проекта: 
Одностраничный сайт для блоггеров с возможностью добавлять собственные фотографии с подписью и "ставить лайки".

### Описание Frontend:
Стек: JavaScript + HTML-5 + CSS
Особенности проекта:
1) Работа выполнена на чистом JavaScript, классовые компоненты.
2) Запросы отправляются на собственное API, в процессе отправки пользователь получает обратную связь от приложения - на время отправки данных на сервер кнопки submit изменяются c "Сохранить" на "Сохранение...", чтобы у него было понимание, что сервер не завис, а работает с его запросом.
3) Валидация введенных данных - кнопки submit не работают до введения корректных данных - минимальное/максимальное количество символов.
4) Адаптивный дизайн от 320px до 1280px с помощью медиа-запросов.
5) Вёрстка - Flexbox + Grid.
6) Переиспользование элементов верстки.
7) Файлы структурированы по БЭМ(Nested).

### Описание Backend:
Cерверная часть учебной платформы Яндекс.Практикум - запросы API.

### Deploy
Запустить проект можно скопировав репозиторий => npm install => npm run dev
