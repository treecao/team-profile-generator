//Manager constructor
const Manager = require('../lib/Manager');

test('Manager', () =>{
    let e = new Manager('Tree', 4, 'tree@tree.com', 'office');
    expect(e.name).toBe('Tree');
    expect(e.id).toBe(4);
    expect(e.email).toBe('tree@tree.com');
    expect(e.officeNumber).toBe('office');
})