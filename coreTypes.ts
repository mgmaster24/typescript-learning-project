enum Role {
    Admin,
    READ_ONLY,
    AUTHOR
};

const person = {
    age: 30,
    name: 'Michael',
    hobbies: ['Exercise', 'Boom Boom'],
    role: Role.Admin
};

const tuple: [number, string] = [0, 'me'] 

const test: string = '';

if (person.role === Role.Admin) {
    console.log(`${person.name} is admin`);
}

console.log(`${person.name}'s hobbies are `)
person.hobbies.forEach(hobby => {
    console.log(hobby);
});