const express = require('express');
const path = require('path');

const app = express();

// Configs de execução
const isProd = process.env.NODE_ENV === 'production';
app.disable('x-powered-by');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// Cache de views somente em produção
app.set('view cache', isProd);

// Servir estáticos com cache controlado
const staticOpts = {
  etag: true,
  maxAge: isProd ? '7d' : 0,
  immutable: isProd
};
app.use(express.static(path.join(__dirname, 'public'), staticOpts));
app.use('/assets', express.static(path.join(__dirname, 'assets'), staticOpts));

const profile = {
  name: 'Luis Henrique Costa Pereira',
  title: 'Estudante de Desenvolvimento de Software | Full-Stack em formação',
  location: 'Brasília, Distrito Federal, Brasil',
  githubUrl: 'https://github.com/Lupahlinda',
  linkedinUrl: 'https://www.linkedin.com/in/luis-h-pereira-7010412b7',
  headlineEducation: 'Graduando no IESB',
  photoUrl: '/assets/foto.png',
  summary: 'Sólida base em desenvolvimento full-stack e engenharia de software, nível intermediário em JavaScript e TypeScript, atuando em frontend e backend. Experiência com ambientes Linux (Debian/Arch), fundamentos em Java, C, C++, Python (dados/ML), bancos SQL/NoSQL, engenharia de requisitos, arquitetura, DevOps e métodos ágeis. Vivência com análise de dados, machine learning, redes, sistemas distribuídos e segurança de aplicações. Perfil colaborativo, comunicação eficaz, gestão de projetos e espírito empreendedor.',
  strengths: [
    'Formação ativa em TI/desenvolvimento de sistemas',
    'Projetos no GitHub mostrando iniciativa e boas práticas',
    'Potencial de crescimento em tecnologia com aprendizado contínuo'
  ],
  skills: {
    languages: ['JavaScript', 'TypeScript', 'Java', 'C', 'C++', 'Python'],
    frontend: ['HTML', 'CSS', 'EJS', 'Tailwind CSS'],
    backend: ['Node.js', 'Express', 'APIs REST'],
    databases: ['SQL', 'NoSQL'],
    devops: ['Linux', 'Git', 'CI/CD (conceitos)', 'Metodologias Ágeis'],
    data: ['Análise de Dados', 'Machine Learning (fundamentos)'],
    other: ['Engenharia de Requisitos', 'Arquitetura de Sistemas', 'Segurança de Aplicações'],
    soft: ['Trabalho em equipe', 'Comunicação', 'Gestão de projetos', 'Iniciativa/Empreendedorismo']
  },
  education: [
    {
      course: 'Graduação em área de TI/Desenvolvimento de Sistemas',
      institution: 'Instituto de Educação Superior de Brasília (IESB)',
      location: 'Brasília/DF',
      period: 'Em andamento'
    }
  ],
  projects: [
    {
      name: 'AlimentePlus‑dev',
      description: 'Projeto acadêmico (IESB – Engenharia de Software e Métodos Ágeis). App web em React + Vite com TailwindCSS, React Router, Axios e Leaflet/React-Leaflet. Requisitos: Node 18+, npm 9+. Como rodar: npm install, npm run mock:server e npm run dev.',
      url: 'https://github.com/Lupahlinda/AlimentePlus-dev'
    },
    {
      name: 'Proddy',
      description: 'Ferramenta de produtividade (mobile) construída com TypeScript. Indícios de uso de Expo (execução via "expo start" e APK nas releases). Destaques: tarefas/projetos, progresso/metas, notificações, relatórios e sincronização na nuvem.',
      url: 'https://github.com/Lupahlinda/Proddy'
    },
    {
      name: 'CaixinhaSuperCofrinho',
      description: 'Projeto acadêmico (Aprendizagem de Máquina – IESB). Simulador de investimentos em Python 3 que calcula rendimento líquido considerando valor investido, taxa anual, IOF, IR e período (dias).',
      url: 'https://github.com/Lupahlinda/CaixinhaSuperCofrinho'
    }
  ]
};

app.get('/', (req, res) => {
  res.render('index', { profile });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
