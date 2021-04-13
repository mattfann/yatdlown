describe('todo-list', function(){
    it('shows a heading', function(){
        cy.visit('/')
        cy.contains('Yet Another Todo List!')
    })
    it('shows Save button', function(){
        cy.visit('/')
        cy.contains('Save')
    })
})