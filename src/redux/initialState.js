const initialState = {
  experience: [
    {
      id: 1,
      years: '2016 - now',
      institution: 'Maff - tapicerstwo samochodowe',
      city: 'Rumia',
      position: 'Car Upholsterer',
      details: 'My duties included disassembly of vehicle interiors, making new elements, according to wishes of the client. Installation in the car.',
    },
    {
      id: 2,
      years: '2013 - 2016',
      institution: 'Baltic Container Terminal sp. z o.o.',
      city: 'Gdynia',
      position: 'Electro-automatic',
      details: 'My duties included the repair and maintenance of machines, conducting technical inspections and ensuring the continuity of machine operation. I worked with Siemens brand controllers.',
    },
    {
      id: 3,
      years: '2012 - 2012',
      institution: 'Techaco sp. z o.o.',
      city: 'Gdańsk',
      position: 'Trainee',
      details: 'Work as a student internship. My duties included helping to start a home solar power plant and work on assembling industrial fittings.',
    },
  ],

  education: [
    {
      id: 1,
      years: '2023 - now',
      institution: 'Kodilla',
      position: 'Full Stack Developer',
      city: 'On-line',
      details: 'Front-end and back-end developer. Known technologies: html, css, scss, javascript, react, redux',
    },
    {
      id: 2,
      years: '2009 - 2013',
      institution: 'Maritime Academy',
      city: 'Gdynia',
      position: 'Engineer',
      details: 'Electrical department. Specialization in marine electroautomation',
    },
    {
      id: 3,
      years: '2005 - 2009',
      institution: 'PZS nr.1',
      city: 'Kościerzyna',
      position: 'Technician',
      details: 'Economics direction',
    },
  ],

  skills: [
    {
      id: 1,
      name: 'Reading technical documentation',
    },
    {
      id: 2,
      name: 'Analytical thinking',
    },
    {
      id: 3,
      name: 'English - B2',
    },
  ],

  technologies: [
    {
      id: 1,
      name: 'HTML, CSS',
    },
    {
      id: 2,
      name: 'JavaScript',
    },
    {
      id: 3,
      name: 'React, Redux',
    },
    {
      id: 4,
      name: 'Photoshop',
    },
  ],

  projects: [
    {
      id: 3,
      title: 'CV website',
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
      img: 'cvpage',
      about: 'My home page.',
      link: 'https://karollion.github.io',
    },
    {
      id: 1,
      title: 'Music Service',
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
      about: 'Online music site. On the main page there are all songs, there is also a filtering of songs by genre. The search tab allows you to find songs by genre, title, author. The last tab, discover, randomizes a song from the genre of the most played songs.',
      link: 'https://project-music--karollion.repl.co/',
    },
    {
      id: 2,
      title: 'Corporate website',
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
      about: "Website built and styled according to the client's design.",
      link: 'https://karollion.github.io/Project-3-alecto/',
    },
  ],

  activePage: 0,
};

export default initialState;