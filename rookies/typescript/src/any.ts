class User {
  firstName!: string;
  lastName!: string;
}

const a = new User();
a.firstName = 'John';
a.lastName = 'Doe';

const b = ['Jane', 'Doe'];

const getFullName = (user: unknown): string => {
  if (user instanceof User) {
    return `${user.firstName} ${user.lastName}`;
  } else if (Array.isArray(user)) {
    return user.join(' ');
  }
  return '';
}

console.log(getFullName(a)); // John Doe

console.log(getFullName(b)); // Jane Doe

export {}