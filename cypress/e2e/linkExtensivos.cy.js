/// <reference types="cypress" />

it('Deve abrir a guia para os cursos extensivos', () => {
    // Visita a página inicial
    cy.visit('/')
    // Valida que a página inicial abriu corretamente
    cy.title().should('eq', 'Residência Médica: Provas, Cursos, Extensivos - Grupo MEDCOF')
    // Valida que o elemento com o link a ser clicado está visivel
    //Valida que o o elemento contém o texto requerido
    cy.get('a').contains('extensivos 2024 - inscrições abertas')
        .should('be.visible')
        .should('have.text', 'extensivos 2024 - inscrições abertas')
    //Clica no botão com o link para a página dos cursos extensivos
    cy.get('a').contains('extensivos 2024 - inscrições abertas').click()
    //Aguarda a nova guia abrir
    cy.wait(1000)
   
   //Captura Url da segunda aba que está sendo aberta
    cy.get('a').contains('extensivos 2024 - inscrições abertas').then (function(ln){
        const url= ln.prop('href');
    //Visita a Url da nova guia
    cy.visit('https://www.grupomedcof.com.br/links-extensivos-2024/')
    //Valida que o link aberto corresponde a aba com os cursos extensivos
    cy.title().should('contain', 'Extensivos 2024 - Links Úteis [Curso] [Links] - Grupo MedCof')
})

})








