describe('todo-list', function(){
    beforeEach(function(){
        cy.visit('/')
    })
    it('shows a heading', function(){
        cy.contains('Yet Another Todo List!')
    })
    it('shows Save button', function(){
        cy.contains('Save')
    })
    it('shows Clear button', function(){
        cy.contains('Clear')
    })
    it('shows textbox', function(){
        cy.get('#textbox').should('be.empty')
    })
       it('shows todo item on page', function(){
        cy.get('#textbox').type('my first todo')
        cy.get('#save').click()
        cy.contains('my first todo')
    })
        it('the item is being completed', function(){
        cy.get('#textbox').type('my first todo')
        cy.get('#save').click()
        cy.get('[type="checkbox"]').click()
        cy.get('label').should('have.css', 'text-decoration','line-through rgb(0, 0, 0)')
        
    })
      it('clears item from the page', function(){
        cy.get('#textbox').type('my first todo')
        cy.get('#save').click()
        cy.get('#clear').click()
        cy.get('my first todo').should('not.exist');
    })

})