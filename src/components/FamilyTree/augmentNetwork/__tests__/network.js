const network = {
  nodes: [
    {
      id: 0,
      level: 1,
      details: {
        name: 'Harry Potter',
        relations: {
          father: 1,
          mother: 2,
        },
        metadata: {
          gender: 'M',
          description: 'The boy who lived',
          birth: '1980-07-31',
        },
      },
    },
    {
      id: 1,
      level: 2,
      details: {
        name: 'James Potter',
        relations: {
          wife: 2,
          father: 3,
          mother: 4,
        },
        metadata: {
          gender: 'M',
          birth: '1960-03-27',
          death: '1981-10-31',
        },
      },
    },
    {
      id: 2,
      level: 2,
      details: {
        name: 'Lily Potter',
        relations: {
          husband: 1,
          father: 5,
          mother: 6,
        },
        metadata: {
          gender: 'F',
          birth: '1960-01-30',
          death: '1981-10-31',
        },
      },
    },
    {
      id: 3,
      level: 3,
      details: {
        name: 'Fleamont Potter',
        relations: {
          wife: 4,
        },
        metadata: {
          gender: 'M',
        },
      },
    },
    {
      id: 4,
      level: 3,
      details: {
        name: 'Euphemia Potter',
        relations: {
          husband: 3,
        },
        metadata: {
          gender: 'F',
        },
      },
    },
    {
      id: 5,
      level: 3,
      details: {
        name: 'Mr. Evans',
        relations: {
          wife: 6,
        },
        metadata: {
          gender: 'M',
        },
      },
    },
    {
      id: 6,
      level: 3,
      details: {
        name: 'Mrs. Evans',
        relations: {
          husband: 5,
        },
        metadata: {
          gender: 'F',
        },
      },
    },
    {
      id: 7,
      level: 1,
      details: {
        name: 'Gina Potter',
        relations: {
          father: 1,
          mother: 2,
        },
        metadata: {
          gender: 'F',
        },
      },
    },
  ],
  edges: [
    {
      from: 1,
      to: 0,
      label: 'father',
    },
    {
      from: 2,
      to: 0,
      label: 'mother',
    },
    {
      from: 2,
      to: 1,
      label: 'wife',
    },
    {
      from: 3,
      to: 1,
      label: 'father',
    },
    {
      from: 4,
      to: 1,
      label: 'mother',
    },
    {
      from: 1,
      to: 2,
      label: 'husband',
    },
    {
      from: 5,
      to: 2,
      label: 'father',
    },
    {
      from: 6,
      to: 2,
      label: 'mother',
    },
    {
      from: 4,
      to: 3,
      label: 'wife',
    },
    {
      from: 3,
      to: 4,
      label: 'husband',
    },
    {
      from: 6,
      to: 5,
      label: 'wife',
    },
    {
      from: 5,
      to: 6,
      label: 'husband',
    },
    {
      from: 1,
      to: 7,
      label: 'father',
    },
    {
      from: 2,
      to: 7,
      label: 'mother',
    },
  ],
};

export default network;
