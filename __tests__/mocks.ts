import { Author } from '../src/types/author';
import { Strat } from '../src/types/strat';

export function mockStrat(overrides?: Partial<Strat>): Strat {
    return {
        id: '1234',
        name: 'Strats for Stratty things!',
        author: mockAuthor(),
        ...overrides
    };
}

export function mockAuthor(overrides?: Partial<Author>): Author {
    return {
        uid: 'marcy',
        name: 'Marcy',
        image: 'https://avatars.githubusercontent.com/u/9692284?v=4',
        pronouns: [1, -1],
        ...overrides
    };
}