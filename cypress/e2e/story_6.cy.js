describe("Usuário solicita dados de uma matrícula que foi excluída", () => {
    const requestTest = {
        method: 'GET',
        url: 'http://localhost:8080/v1/matriculas/4653499',
        headers: {
            'X-API-KEY': 'unime-qualidade-oficial2',
            'Content-Type': 'application/json'
        },
        failOnStatusCode: false // Adiciona o parâmetro para não falhar no status 404
    };
    it("verifica se resposta contém uma mensagem indicando que a matrícula foi excluida", () => {
        cy.request(requestTest)
            .then((response) => {
                // Verifica se o status code da resposta é 404
                expect(response.status).to.eq(404);
                // Verifica se o campo "mensagem" está presente no corpo da resposta e contém mensagem esperada.
                expect(response.body).to.have.property('mensagem')
                    .that.includes('A matrícula informada foi excluída de nossa base de dados!');
            });
    })

})