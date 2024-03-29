# HEWNEW

Study project (5 semester): a single-page web-application with Auth0 authetication. For serverless back-end used AWS (Cloudfront for HTTPS, Lambda functions, API Gateway, S3, RDS) - services are not available right now.

The folder ./src/pages contains html and css files for multiple-page version of the app.

# Подробнее

**Назначение и область применения**: профессиональная платформа для фотографов

## Назначение и цели создания системы

**Назначение разработки**: упростить процесс поиска в обе стороны: для фотографа - клиентов, для пользователя - фотографа

**Цели создания**: предоставить фотографам платформу для оформления портфолио, облегчить поиск фотографа для пользователей согласно их пожеланиям, наладить оперативную обратную связь между ними

## Требования к защите информации и программ

**Требования к защите информации от несанкционированного доступа**: парольная политика для пользователей, возможность восстановление пароля; данные системы должны быть доступны только через программный интерфейс и изолированы от доступа третьими лицами; данные должны быть доступны только авторизованным лицам в формате, соответствующему их уровню доступа

## Разработка проекта системы базы данных

**Требования к составу данных**: 

1. Информация о категории пользователей "Пользователь": id, логин, пароль, почта, дата регистрации, псевдоним (ФИО). После подтверждения учетной записи через номер телефона "Пользователь" приобрает атрибут подтверждения и может перейти в ниже следующие подкатегории путем выполнения определенных действий.
2. Информация о подкатегории пользователей "Фотограф": наследуются данные от "Пользователя", новые: минимальный ценник, графы, заполняемые текстом - "опыт", "техника", "стили" (список дополняется); ссылка на портфолио внутри платформы, ссылки на другие соцсети; фотографии
3. Информация о подкатегории пользователей "Клиент": наследуются данные от "Пользователя", новые: графы, заполняемые текстом - "о себе" (список дополняется); ссылки на соцсети.
4. Информация, относящаяся к "Портфолио": изображения с описаниями и тэгами, указанными в данных "Пользователя" ("техника", "стили").

**Требования к представлению информации**: информация представляется в виде базы данных.

**Требования по применению СУБД**: 

1. Регистрация и авторизация пользователей.
2. Хранение информации
3. Контроль запросов и пресечение попыток нарушить правила безопасности и целостности

## Заполнение базы данных информацией
**Требования к заполнению базы данных**: 

1. Информация о пользователях категорий "Пользователь", подкатегорий "Фотограф", "Клиент", заполняемая вручную самими пользователями: логин, пароль, псевдоним (ФИО), номер телефона и другие. 
2. Информация о пользователях категорий "Пользователь", подкатегорий "Фотограф", "Клиент", заполняемая автоматически: id, дата регистрации, ссылка на портфолио.
3. Информация пользователей категории "Фотограф", относящаяся к портфолио: вручную загружаемые пользователем изображения

**Требования к источникам информации**: источником информации являются пользовательские данные.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
