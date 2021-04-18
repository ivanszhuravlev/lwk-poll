import {IChat, IUser} from '../store/stores/chats/chatsStore';

export const mockUsers: IUser[] = [
  {
    id: 'u1',
    name: 'Clara Oswald',
    avatar:
      'https://images.freeimages.com/images/large-previews/1c1/face-nervous-1511394.jpg',
  },
  {
    id: 'u2',
    name: 'Edwin Bass',
    avatar:
      'https://images.freeimages.com/images/large-previews/d47/my-father-1439504.jpg',
  },
  {
    id: 'u3',
    name: 'David Bowie',
    avatar:
      'https://images.freeimages.com/images/large-previews/2b2/eyes-1-1436207.jpg',
  },
  {
    id: 'u4',
    name: 'Kelley Hodges',
    avatar:
      'https://images.freeimages.com/images/large-previews/f6d/young-woman-5-1434130.jpg',
  },
  {
    id: 'u5',
    name: 'Jared Phillips',
    avatar:
      'https://images.freeimages.com/images/large-previews/ad8/portrait-3-1437903.jpg',
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
        user: mockUsers[0],
        type: 'text',
        text: 'Hi everyone!!!',
      },
      {
        id: 'm2',
        user: mockUsers[0],
        type: 'text',
        text:
          'I’m in also! Mike’s Diner would be a good choice 🔥🔥🔥how about everyone else? Any ideas?',
      },
      {
        id: 'm3',
        user: mockUsers[1],
        type: 'text',
        text: 'Sounds good to me!!!',
      },
      {
        id: 'm4',
        user: mockUsers[2],
        type: 'text',
        text: '@kellyhodges are you in???',
      },
      {
        id: 'm5',
        user: mockUsers[3],
        type: 'text',
        text: 'Nice! 12 ppl in total. Let’s gather at the metro station!🚆🚆🚆',
      },
      {
        id: 'm6',
        user: mockUsers[4],
        type: 'text',
        text: 'Okie dokie!!',
      },
    ],
  },
];
