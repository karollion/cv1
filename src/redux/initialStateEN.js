const initialState = {
  about: 'I have been intensively learning web development for almost a year. So far I have finished learning frontend and started backend. In the future I want to work as a full stack developer. I know that I have little experience, so I am looking for a job where I will gain new skills.',

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
      title: 'Online shop "Bazar"',
      tech: [
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
          name: 'JavaScript',
        },
        {
          id: 4,
          name: 'React',
        },
        {
          id: 5,
          name: 'Redux',
        },
      ],
      img: 'bazar',
      about: 'A website for a furniture store that I created with my team. I have completely created the "promoted" and "feedback" sections.',
      link: 'https://wdp-2309-01.netlify.app/',
    },
    {
      id: 3,
      title: 'Music Service',
      tech: [
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
          name: 'JavaScript',
        },
      ],
      img: 'musicPage',
      about: 'Online music site. On the main page there are all songs, there is also a filtering of songs by genre. The search tab allows you to find songs by genre, title, author. The last tab, discover, randomizes a song from the genre of the most played songs.',
      link: 'https://project-music--karollion.repl.co/',
    },
    {
      id: 2,
      title: 'Pizzeria',
      tech: [
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
          name: 'JavaScript',
        },
      ],
      img: 'pizza',
      about: "Pizzeria website. You can place an order online and reserve a table for a convenient date.",
      link: 'https://8-project-pizzeria--karollion.repl.co/#/home',
    },
    {
      id: 1,
      title: 'Corporate website',
      tech: [
        {
          id: 1,
          name: 'HTML',
        },
        {
          id: 2,
          name: 'CSS',
        },
      ],
      img: 'alecto',
      about: "Individual website design built and styled exactly according to the client's design.",
      link: 'https://karollion.github.io/Project-3-alecto/',
    },
  ],

  interfaceElements: [
    {
      job: 'Junior Full Stack Developer',
      about: 'about',
      resume: 'resume',
      proj: 'projects',
      contact: 'contact',
      phone: 'phone',
      phonenum: '690-302-400',
      email: 'e-mail',
      media: 'socialmedia',
      experience: 'work experience',
      education: 'education',
      skills: 'Skills',
      tech: 'Technologies',
      websites: 'Websites',
      button: 'Go to project',
      contacttitle: "Let's talk",
    },
  ],

  activePage: 0,

  language: 'English',
};

export default initialState;