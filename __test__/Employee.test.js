//employee constructor
const Employee = require('../lib/Employee');

test('employee', () =>{
    let e = new Employee('Tree', 4, 'tree@tree.com');
    expect(e.name).toBe('Tree');
    expect(e.id).toBe(4);
    expect(e.email).toBe('tree@tree.com');
})

//