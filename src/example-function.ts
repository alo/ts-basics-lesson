import { Person } from './person.interface';

export function formatNames(person: Person) {
  return `El teléfono de ${person.name} es ${person.phone}`;
}
