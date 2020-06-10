function formatCep(value) {
  return String(value)
    .replace(/\D/g, "")
    .slice(0, 8)
    .replace(/(\d{5})(\d)/, "$1-$2");
}

const { format: formatPrice } = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

function waitForElement(func, disappear = false, timeout = 100) {
  return new Promise((resolve) => {
    const interval = setInterval(() => {
      // Exibe um console com o elemento que está sendo aguardado
      // console.log("Searching...", func);
      const el = func();

      //   Caso esteja aguardando o elemento desaparecer
      if (disappear) {
        if (!el) {
          resolve();
          clearInterval(interval);
        }
      } else {
        if (el) {
          // Caso encontre o elemento resolve e passa o elemento pro then
          resolve(el);
          clearInterval(interval);
        }
      }
    }, timeout);
  });
}

function formataWA(str) {
  var str = str;
  str = str.toLowerCase().replace(/ /g, "-");
  var com_acento =
    "ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕ";
  var sem_acento =
    "AAAAAAACEEEEIIIIDNOOOOOOUUUUYRsBaaaaaaaceeeeiiiionoooooouuuuybyr";
  var novastr = "";
  for (i = 0; i < str.length; i++) {
    troca = false;
    for (a = 0; a < com_acento.length; a++) {
      if (str.substr(i, 1) == com_acento.substr(a, 1)) {
        novastr += sem_acento.substr(a, 1);
        troca = true;
        break;
      }
    }
    if (troca == false) {
      novastr += str.substr(i, 1);
    }
  }
  return novastr;
}

module.exports = {
  formatCep,
  formatPrice,
  waitForElement,
  formataWA,
};
