import getQuery from '../fixtures/getQuery.json';
import getSingle from '../fixtures/getSingle.json';

describe('Home page', () => {
  it('opens the app and visit home page', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#inicio').find('img').should('have.attr', 'alt').then((altText) => {
      expect(altText).to.equal('Mercado Libre');
    });
    cy.get('form').should('have.id', 'search-form');
    cy.get('form').find('input#searchKeyword').should('have.attr', 'placeholder', 'Nunca dejes de buscar');
    const input = 'iphone';
    cy.get('#searchKeyword').type(input).should('have.value', input);
    cy.get('form').find('button').should('have.attr', 'name', 'Buscar');
  });
});

describe('Search item page', () => {
  it('opens the app and visit the page with a search query', () => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'http://localhost:4000/api/items?q=iphone',
      response: getQuery,
    }).as('getQueryData');
    cy.visit('http://localhost:3000/items?search=iphone');
    cy.wait('@getQueryData');
    cy.get('section').find('a').should('have.length', 4);
    cy.get('section').find('a').each(($el) => {
      cy.get($el).should('have.attr', 'title');
      cy.get($el).find('img').should('have.attr', 'alt');
    });
  });
});

describe('Single item page', () => {
  it('opens the app and visit the page with a id in query params', () => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'http://localhost:4000/api/items/MLA884082181',
      response: getSingle,
    }).as('getItemData');
    cy.visit('http://localhost:3000/items/MLA884082181');
    cy.wait('@getItemData');
    cy.get('section').find('img').should('have.attr', 'alt');
    cy.get('section').find('h1').should('exist');
    cy.get('section').find('button').should('contain', 'Comprar');
  });
});
