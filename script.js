cy.get('button').should('have.attr', 'value', 'Submit');
cy.get('button').should('have.attr', 'id', 'submit');
cy.get('button').should('have.attr', 'type', 'submit');