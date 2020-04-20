# VUE

## Figma
  `https://www.figma.com/file/MXC5HKQvzcYUUZzUYQas6h/test-(Copy)?node-id=1%3A58`

## ТЗ
  1. Тестовое задание "Плитка + чат"
  Вам предлагается cверстать (без использования JS или bootstrap) один небольшой адаптивный блок + окно чата. Макеты прилагаются - https://www.figma.com/file/aXI1GkPvjq0o8QqpmlMw0Jr9/test

  Требования к верстке следующие: html5, sass/css, названия классов согласно БЭМ, адаптивность должна создаваться по принципу mobilefirst. Минимальная ширина результата 320px, максимальная 768px фиксированная по центру родителя, внутри верстка "резиновая" переход между состояниями на 480px. Соответствие макетам pixelperfect в брейкпоинтах 320 и 768 px.

  2. По SPA

  1) При клике на день недели в окне слева показывается расписание (по умолчанию выбран текущий день недели)  

  2) И часы и надпись можно отредактировать кликнув по ним или удалить всю строку кликнув на крестик

  3) Новые строки добавляются кликом на +

  4) Новая строка после добавления (ещё раз нажать на + или enter) плавно (400ms) перемещается на свое место (сортировка по времени суток)

  5) Записи в прошедшем времени становятся красными

  6) Записи можно дублировать на другую дату, перетащив звездочку на нужную дату (существующие записи заменяются на текущие)

  7) Данные должны сохранятся при перезагрузке страницы

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Run your tests
```
yarn run test
```

### Run your end-to-end tests
```
yarn run test:e2e
```

### Run your unit tests
```
yarn run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
