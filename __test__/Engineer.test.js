//Engineer constructor
const Engineer = require('../lib/Engineer');

test('engineer', () =>{
    let e = new Engineer('Tree', 4, 'tree@tree.com', 'treecao');
    expect(e.name).toBe('Tree');
    expect(e.id).toBe(4);
    expect(e.email).toBe('tree@tree.com');
    expect(e.github).toBe('treecao');
})