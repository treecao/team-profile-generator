//Intern constructor
const Intern = require('../lib/Intern');

test('intern', () =>{
    let e = new Intern('Tree', 4, 'tree@tree.com', 'school');
    expect(e.name).toBe('Tree');
    expect(e.id).toBe(4);
    expect(e.email).toBe('tree@tree.com');
    expect(e.school).toBe('school');
})