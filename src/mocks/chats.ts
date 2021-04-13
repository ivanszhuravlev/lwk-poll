import {IChat, IUser} from '../store/stores/chats/chatsStore';

const users: IUser[] = [
  {
    id: 'u1',
    name: 'Clara Oswald',
    avatar: '',
  },
  {
    id: 'u2',
    name: 'Edwin Bass',
    avatar: '',
  },
  {
    id: 'u3',
    name: 'David Bowie',
    avatar: '',
  },
  {
    id: 'u4',
    name: 'Kelley Hodges',
    avatar: '',
  },
  {
    id: 'u5',
    name: 'Jared Phillips',
    avatar: '',
  },
];

export const mockChats: IChat[] = [
  {
    id: 'c1',
    name: 'Lowkey Squad',
    members: 3,
    membersOnline: 1,
    messages: [
      {
        id: 'm1',
        user: users[0],
        type: 'text',
        text: 'Hi everyone!!!',
      },
      {
        id: 'm2',
        user: users[0],
        type: 'text',
        text:
          'I’m in also! Mike’s Diner would be a good choice 🔥🔥🔥how about everyone else? Any ideas?',
      },
      {
        id: 'm3',
        user: users[1],
        type: 'text',
        text: 'Sounds good to me!!!',
      },
      {
        id: 'm4',
        user: users[2],
        type: 'text',
        text: '@kellyhodges are you in???',
      },
      {
        id: 'm5',
        user: users[3],
        type: 'text',
        text: 'Nice! 12 ppl in total. Let’s gather at the metro station!🚆🚆🚆',
      },
      {
        id: 'm6',
        user: users[4],
        type: 'text',
        text: 'Okie dokie!!',
      },
    ],
  },
];
