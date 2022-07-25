describe('home page', ()=>{
    it('app deve estar online', ()=>{ // it é um caso de teste no Cypress
        cy.viewport(1440, 1080)
        cy.visit('https://buger-eats.vercel.app')//cy API do Cypress
        cy.get('h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')//should() é um asserts "expectativa para fazer uma validação"
    })
})