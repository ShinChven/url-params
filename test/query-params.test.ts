import {queryParams} from '../src/query';

const params = queryParams({
    query: 'id=12&age=23&gender=female&state=false',
    typing: {
        'id': 'number',
        'age': 'number',
        'state': 'boolean'
    }
});

console.log(params);
