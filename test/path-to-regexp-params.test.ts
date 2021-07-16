import {pathToEgexpParams} from '../src';

const params = pathToEgexpParams({
    pattern: '/users/:id/:age/:gender/:state',
    path: '/users/12/22/male/true',
    typing: {
        'id': 'number',
        'age': 'number',
        'state': 'boolean'
    }
});

console.log(params);
