'use strict';

const people = require('./lib/people');

const table = document.querySelector('tbody');

people.forEach(person => {
  const personSex = person.sex === 'm' ? 'Male' : 'Female';
  const century = Math.ceil(person.died / 100);
  const age = person.died - person.born;

  table.insertAdjacentHTML('beforeend', `
    <tr>
      <td>${person.name}</td>
      <td>${personSex}</td>
      <td>${person.born}</td>
      <td>${person.died}</td>
      <td>${age}</td>
      <td>${century}</td>
    </tr> `
  );
});