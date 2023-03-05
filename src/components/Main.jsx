import Tree from './AssignmentTree';

const treeData = {
  id: 1,
  label: 'Week 1',
  children: [
    {
      id: 2,
      label: 'Monday',
      children: [
        {
          id: 3,
          label: 'Assignment 1',
          assignment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          id: 4,
          label: 'Assignment 2',
          assignment: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
      ],
    },
    {
      id: 5,
      label: 'Tuesday',
      children: [
        {
          id: 6,
          label: 'Assignment 3',
          assignment: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
      ],
    },
  ],
  id: 2,
  label: 'Week 2',
  children: [
    {
      id: 2,
      label: 'Monday',
      children: [
        {
          id: 3,
          label: 'Assignment 1',
          assignment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          id: 4,
          label: 'Assignment 2',
          assignment: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
      ],
    },
    {
      id: 5,
      label: 'Tuesday',
      children: [
        {
          id: 6,
          label: 'Assignment 3',
          assignment: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
      ],
    },
  ],
};

function Main() {
  return <Tree data={treeData} />;
}

export default Main;
