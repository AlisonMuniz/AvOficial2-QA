describe("Usuário solicita dados da matrícula de um aluno bolsista 100%", () => {
    const requestTest = {
        method: 'GET',
        url: 'http://localhost:8080/v1/matriculas/7890123',
        headers: {
            'X-API-KEY': 'unime-qualidade-oficial2',
            'Content-Type': 'application/json'
        }
    };
    it("verifica se a mensalidade está zerada e a data de vencimento é nula", () => {
        cy.request(requestTest)
            .then((response) => {
                // Verifica se o campo "amount" está com o valor zerado.
                expect(response.body.tuition.amount).to.eq(0.0);
                // Verifica se o campo "dueDate" está retornando null.
                expect(response.body.tuition.dueDate).to.eq(null);
            });
    })

})