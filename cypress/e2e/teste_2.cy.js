describe("Usuário solicita dados da matrícula de um aluno com mensalidade atrasada", () => {
    const requestTest = {
        method: 'GET',
        url: 'http://localhost:8080/v1/matriculas/5566778',
        headers: {
            'X-API-KEY': 'unime-qualidade-oficial2',
            'Content-Type': 'application/json'
        }
    };
    it("verifica se resposta contém uma mensagem indicando que a matrícula possui pagamento em atraso", () => {
        cy.request(requestTest)
            .then((response) => {
                // Verifica se o campo "mensagem" está presente no corpo da resposta e contém mensagem esperada.
                expect(response.body).to.have.property('mensagem')
                    .that.includes('A matrícula informada possui débitos em aberto. Não é possível obter dados da mesma até a quitação!');
            });
    })

})