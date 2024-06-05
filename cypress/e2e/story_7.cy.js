describe("Usuário solicita dados de uma matrícula inválida", () => {
    const requestTest = {
        method: 'GET',
        url: 'http://localhost:8080/v1/matriculas/999999999999',
        headers: {
            'X-API-KEY': 'unime-qualidade-oficial2',
            'Content-Type': 'application/json'
        },
        failOnStatusCode: false // Adiciona o parâmetro para não falhar no status 400
    };
    it("verifica se resposta contém uma mensagem indicando que a matrícula é invalida", () => {
        cy.request(requestTest)
            .then((response) => {
                // Verifica se o status code da resposta é 400
                expect(response.status).to.eq(400);
                // Verifica se o campo "mensagem" está presente no corpo da resposta e contém mensagem esperada.
                expect(response.body).to.have.property('mensagem')
                    .that.includes('A matrícula informada não parece ser válida!');
            });
    })

})