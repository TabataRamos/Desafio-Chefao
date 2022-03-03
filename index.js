(async () => {
  const database = require("./db");
  const Produto = require("./produto");
  await database.sync();

  ////////////////CRIAR UM PRODUTO
  /*
  const novoProduto = await Produto.create({
      nome: '',
      tipo: '',
      região: '',
      uva: '',
      harmonização: '',
      descrição: ''
  })
  console.log(novoProduto);
  */
})();
