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
})