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

module.exports = {
  formatCep,
  formatPrice,
  waitForElement,
};
