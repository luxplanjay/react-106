# Заняття 11 - Бібліотека Redux

## Алгоритм дій

1. Створити стор (редюсер + початковий стан)
2. Створити інтерфейс (компоненти) і підписатись на стан
3. Оголосити необхідні екшени
4. Відправити екшен
5. Обробити екшен в редюсері

## Управління станом

- Глобальний стан та потік даних
- Сутності Redux
- Алгоритм дій
- Встановлення бібліотек
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Redux](https://react-redux.js.org/)

## Стор (store)

- Функція `configureStore`
- Розбір Redux Devtools
- Підписка на стор хуком `useSelector`
- Функції-селектори

## Екшени (actions)

- Фабрики екшенів
- Функція `createAction`
- Відправлення екшенів з `useDispatch`

## Редюсери (reducers)

- Сігнатура редюсера
- Кореневий редюсер
- Чому за замовчуванням `return state`
- Обробка екшенів

## Практика

![UI завдання](https://raw.githubusercontent.com/goitacademy/react-course-track/11-redux/assets/task.gif)

Так має виглядати початковий стан:

```js
{
  balance: {
    value: 0
  },
  locale: {
    lang: "uk"
  }
}
```
