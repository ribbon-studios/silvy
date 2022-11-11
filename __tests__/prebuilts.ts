import { mockAuthor } from './mocks';

export const authors = {
    ceci: mockAuthor({
        uid: 'ceci',
        name: 'Ceci',
        image: 'https://avatars.githubusercontent.com/u/9692284?v=4',
        pronouns: ['she/hers', 'they/them']
    }),
    clover: mockAuthor({
        uid: 'clover',
        name: 'Clover',
        image: 'https://i.imgur.com/WKXMkzY.png',
        pronouns: ['she/her', 'they/them', 'he/him']
    }),
    mumu: mockAuthor({
        uid: 'mumu',
        name: 'Mumu',
        image: 'https://i.imgur.com/I4bUHxt.png',
        pronouns: ['they/them']
    })
}