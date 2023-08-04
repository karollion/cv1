const initialState = {
  experience: [
    {
      id: 1,
      years: '2016 - now',
      institution: 'Maff - tapicerstwo samochodowe',
      city: 'Rumia',
      position: 'Car Upholsterer',
      details: 'Do moich obowiązków należał demontaż wnętrz pojazdów, wykonanie nowych elementów, złożenie i montaż.',
    },
    {
      id: 2,
      years: '2013 - 2016',
      institution: 'Baltic Container Terminal sp. z o.o.',
      city: 'Gdynia',
      position: 'Electro-automatic',
      details: 'Do moich obowiązków należała naprawa i konserwacja maszyn, prowadzenie przeglądów technicznych oraz zapewnienie ciągłości pracy maszyn. Pracowałem ze sterownikami marki Siemens.',
    },
    {
      id: 3,
      years: '2012 - 2012',
      institution: 'Techaco sp. z o.o.',
      city: 'Gdańsk',
      position: 'Trainee',
      details: 'Praca w formie praktyk studenckich. Do moich obowiązków należała pomoc w uruchomieniu przydomowej elektrowni słonecznej i praca przy składaniu armatury przemysłowej.',
    },
  ],

  education: [
    {
      id: 1,
      years: '2023 - now',
      institution: 'Kodilla',
      position: 'Full Stack Developer',
      city: '',
      details: 'Frontend and backend developer',
    },
    {
      id: 2,
      years: '2009 - 2013',
      institution: 'Books',
      city: '',
      position: 'sdgsdgsdg',
      details: 'Book',
    },
    {
      id: 3,
      years: '2005 - 2009',
      institution: 'Books',
      city: '',
      position: 'sdgsdgsdg',
      details: 'Book',
    },
  ],

  projects: [
    {
      id: 1,
      title: 'Music Service',
      tech: 'HTML scss js',
      img: 'musicPage',
      about: 'stronka z muzyką jest szukajka i losowajka',
      link: 'https://project-music--karollion.repl.co/',
    },
  ],

  activePage: 0,
};

export default initialState;