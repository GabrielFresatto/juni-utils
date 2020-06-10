# Funções de formatação

Como installar?

```shell
npm i juni-utils ou yarn add juni-utils
```

Como usar?

```js
const { formatCep } = require("juni-utils");
```

- formatCep(value: number | string):
  Essa função irá formatar um CEP

- formatPrice(value: number)
  Formata o valor inserido para moeda. Ex: 1000 => R$ 1000,00, 3937.09 => R$ 3937,09

- waitForElement(func => Element): func(elementFound)
