const initialState = {
  about: 'Od prawie roku intensywnie uczę się tworzenia stron internetowych. Do tej pory ukończyłem naukę frontendu i zacząłem backend. W przyszłości chcę pracować jako full stack developer. Wiem że mam mało doświadczenia dlatego poszukuje pracy w której zdobęde nowe umiejętności.',

  experience: [
    {
      id: 1,
      years: '2016 - teraz',
      institution: 'Maff - tapicerstwo samochodowe',
      city: 'Rumia',
      position: 'Tapicer samochodowy',
      details: 'Do moich obowiązków należał demontaż wnętrz pojazdów, tworzenie nowych elementów, zgodnie z życzeniem klienta. Montaż w samochodzie.',
    },
    {
      id: 2,
      years: '2013 - 2016',
      institution: 'Bałtycki Terminal Kontenerowy sp. z o.o.',
      city: 'Gdynia',
      position: 'Elektroautomatyk',
      details: 'Do moich obowiązków należała naprawa i konserwacja maszyn, przeprowadzanie przeglądów technicznych oraz zapewnienie ciągłości pracy maszyn. Pracowałem ze sterownikami marki Siemens.',
    },
  ],

  education: [
    {
      id: 1,
      years: '2023 - teraz',
      institution: 'Kodilla',
      position: 'Full Stack Developer',
      city: 'On-line',
      details: 'Front-end and back-end developer. Poznane technologie: html, css, scss, javascript, react, redux',
    },
    {
      id: 2,
      years: '2009 - 2013',
      institution: 'Akademia morska',
      city: 'Gdynia',
      position: 'Inżynier',
      details: 'Wydział elektryczny. Specjalizacja elektroautomatyka okrętowa',
    },
    
  ],

  skills: [
    {
      id: 1,
      name: 'Czytanie dokumentacji technicznej',
    },
    {
      id: 2,
      name: 'Analityczne myślenie',
    },
    {
      id: 3,
      name: 'Angielski - B2',
    },
  ],

  technologies: [
    {
      id: 1,
      name: 'HTML',
    },
    {
      id: 2,
      name: 'CSS',
    },
    {
      id: 3,
      name: 'RWD',
    },
    {
      id: 4,
      name: 'Bootstrap',
    },
    {
      id: 5,
      name: 'NPM',
    },
    {
      id: 6,
      name: 'Git',
    },
    {
      id: 7,
      name: 'JavaScript',
    },
    {
      id: 8,
      name: 'React',
    },
    {
      id: 9,
      name: 'Webpack',
    },
    {
      id: 10,
      name: 'MongoDB',
    },
    {
      id: 11,
      name: 'Mongoose',
    },
    {
      id: 12,
      name: 'Jira',
    },
    {
      id: 13,
      name: 'TypeScript',
    },
    {
      id: 14,
      name: 'NestJS',
    },
    {
      id: 15,
      name: 'MySQL',
    },
    {
      id: 16,
      name: 'Prisma',
    },
    {
      id: 17,
      name: 'Express',
    },
    {
      id: 18,
      name: 'AJAX',
    },
    {
      id: 19,
      name: 'Node',
    },
    {
      id: 20,
      name: 'WebSocket',
    },
    {
      id: 21,
      name: 'Redux',
    },
  ],

  projects: [
    {
      id: 4,
      title: 'Sklep internetowy "Bazar"',
      tech: [
        {
          id: 1,
          color: {background: '#f16529'},
          name: 'HTML',
        },
        {
          id: 2,
          color: {background: '#29a5d1'},
          name: 'CSS',
        },
        {
          id: 3,
          color: {background: '#ffdf00'},
          name: 'JavaScript',
        },
        {
          id: 4,
          color: {background: '#00d5ff'},
          name: 'React',
        },
        {
          id: 5,
          color: {background: '#764abc'},
          name: 'Redux',
        },
      ],
      img: 'bazar',
      about: 'Projekt grupowy.',
      link: 'https://wdp-2309-01.netlify.app/',
    },
    {
      id: 3,
      title: 'Serwis muzyczny',
      tech: [
        {
          id: 1,
          color: {background: '#f16529'},
          name: 'HTML',
        },
        {
          id: 2,
          color: {background: '#29a5d1'},
          name: 'CSS',
        },
        {
          id: 3,
          color: {background: '#ffdf00'},
          name: 'JavaScript',
        },
      ],
      img: 'musicPage',
      about: 'Serwis muzyczny online. Na stronie głównej znajdują się wszystkie utwory, dostępne jest również filtrowanie utworów według gatunku. Zakładka wyszukiwania pozwala znaleźć utwory według gatunku, tytułu, autora. Ostatnia zakładka, odkryj, losuje utwór z gatunku najczęściej odtwarzanych utworów.',
      link: 'https://project-music--karollion.repl.co/',
    },
    {
      id: 2,
      title: 'Pizzeria',
      tech: [
        {
          id: 1,
          color: {background: '#f16529'},
          name: 'HTML',
        },
        {
          id: 2,
          color: {background: '#29a5d1'},
          name: 'CSS',
        },
        {
          id: 3,
          color: {background: '#ffdf00'},
          name: 'JavaScript',
        },
      ],
      img: 'pizza',
      about: "Strona internetowa pizzeri",
      link: 'https://8-project-pizzeria--karollion.repl.co/#/home',
    },
    {
      id: 1,
      title: 'Firmowa strona internetowa',
      tech: [
        {
          id: 1,
          color: {background: '#f16529'},
          name: 'HTML',
        },
        {
          id: 2,
          color: {background: '#29a5d1'},
          name: 'CSS',
        },
      ],
      img: 'alecto',
      about: "Strona internetowa zbudowana i stylizowana według projektu klienta.",
      link: 'https://karollion.github.io/Project-3-alecto/',
    },
  ],

  interfaceElements: [
    {
      job: 'Junior Full Stack Developer',
      about: 'o mnie',
      resume: 'Życiorys',
      proj: 'projekty',
      contact: 'kontakt',
      phone: 'telefon',
      email: 'e-mail',
      media: 'media społecznościowe',
      experience: 'doświadczenie zawodowe',
      education: 'edukacja',
      skills: 'Umiejętności',
      tech: 'Technologie',
      websites: 'Strony internetowe',
    },
  ],

  activePage: 0,

  language: 'Polski',
};

export default initialState;