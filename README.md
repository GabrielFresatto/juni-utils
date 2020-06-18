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

- formataWA(str: string) => formattedString: string
  Formata um texto para o formato de rótulo no GA

- elementIsVisible(target: Element, callback: Function, threshold: number) => void
  | Parametro | Tipo | Descrição |
  | ------------------- | ------------------- |
  | target | Element | Elemento que vai ser monitorado |
  | callback | Function | Função que vai ser executada quando o elemento estiver na tela |
  | threshold | Number | Porcentagem que o elemento deve estar na tela pro callback ser executado. Default: 1 |
