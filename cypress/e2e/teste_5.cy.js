describe("Usuário solicita dados da matrícula de um aluno com todas as mensalidades quitadas", () => {
    const requestTest = {
        method: 'GET',
        url: 'http://localhost:8080/v1/matriculas/1122334',
        headers: {
            'X-API-KEY': 'unime-qualidade-oficial2',
            'Content-Type': 'application/json'
        }
    };
    it("verifica se é retornado uma resposta com dados da matricula", () => {
        cy.request(requestTest)
            .then((response) => {
                // Verifica se o corpo da resposta não está vazia.
                expect(response.body)
                  .to.not.be.empty;
            });
    })
    it("verifica se a data de vencimento é nula", () => {
        cy.request(requestTest)
            .then((response) => {
                // Verifica se o campo "dueDate" está retornando null.
                expect(response.body.tuition.dueDate).to.eq(null);
            });
    })

})