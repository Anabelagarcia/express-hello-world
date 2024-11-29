const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rota principal que envia HTML
app.get("/", (req, res) => {
  // Define o tipo da resposta como HTML
  res.type('html').send(html);
});

// Rota de requisição
app.get('/req', (req, res) => {
  console.log("Just got a request!");
  res.send('Yo!');
});

// Rota para retornar seu nome completo
app.get('/meunome', (req, res) => {
  res.send("Meu nome é Anabela Garcia Matos Domingues");
});
// Rota tico
app.get('/tico', (req, res) => {
  res.send("teco");
});

app.get('/pokemons', (req, res) => {
  const pokemons = [
      { id: 1, name: "Bulbasaur" },
      { id: 2, name: "Ivysaur" },
      { id: 3, name: "Venusaur" },
      { id: 4, name: "Charmander" },
      { id: 5, name: "Charmeleon" },
      { id: 6, name: "Charizard" },
      { id: 7, name: "Squirtle" },
      { id: 8, name: "Wartortle" },
      { id: 9, name: "Blastoise" },
      { id: 10, name: "Caterpie" }
  ];
  res.json(pokemons);
});
app.post('/series', (req, res) => {
  const series = [
      { id: 1, name: "Breaking Bad" },
      { id: 2, name: "Stranger Things" },
      { id: 3, name: "The Office" }
  ];
  res.json(series);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}!`);
});

// Conteúdo HTML que será enviado na resposta
const html = `
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello from Express!</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
      body {
        font-family: 'Arial', sans-serif;
        background-color: #f0f0f0;
        text-align: center;
        padding: 20px;
      }
      h1 {
        color: #333;
      }
      section {
        border-radius: 1em;
        padding: 1em;
        background-color: #fff;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        display: inline-block;
      }
    </style>
  </head>
  <body>
    <section>
      <h1>Hello Express API!</h1>
      <p>Bem-vindo ao seu servidor Express com animações de confetes! 🎉</p>
    </section>
  </body>
</html>
`;
