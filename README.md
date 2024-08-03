# Заняття 11 - Бібліотека Redux

- Управління станом
  - Глобальний стан та потік даних
- Встановлення
  - [Redux Toolkit](https://redux-toolkit.js.org/)
  - [React Redux](https://react-redux.js.org/)
- Стор (store)
  - Додавання [Redux DevTools](https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)
  - Функція `configureStore`
- Підписка на стор
  - Хук `useSelector`
  - Функції-селектори
- Екшени (actions)
  - Фабрики екшенів
  - Функція `createAction`
  - Відправлення екшенів з `useDispatch`
- Редюсери (reducers)
  - Сігнатура редюсера
  - Кореневий редюсер
  - Чому за замовчуванням `return state`
  - Обробка екшенів
  - Редюсери слайсів

## Redux example

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

- Усі налаштування Redux роби у папці `src/redux`
- Створи стор у файлі `store.js`
- Створи файли слайсів `balanceSlice.js` та `localeSlice.js`
- Експортуй редюсер слайсу та екшени із файлу слайса
