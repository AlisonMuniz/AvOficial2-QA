describe("Usuário solicita dados da matrícula de um aluno regular", () => {
    const requestTest = {
        method: 'GET',
        url: 'http://localhost:8080/v1/matriculas/4653421',
        headers: {
            'X-API-KEY': 'unime-qualidade-oficial2',
            'Content-Type': 'application/json'
        }
    };
    it("Verifica se resposta contém TODOS os dados da matrícula", () => {
        cy.request(requestTest)
            .then((response) => {

                // Verifica se o campo "id" está presente no corpo da resposta
                expect(response.body).to.have.property('id');
                // Verifica se o campo "courseName" está presente no corpo da resposta
                expect(response.body).to.have.property('courseName'); 
                // Verifica se o campo "tuition" está presente no corpo da resposta
                expect(response.body).to.have.property('tuition');

                // Verifica se o campo "amount" está presente dentro do campo tuition
                expect(response.body.tuition).to.have.property('amount'); 
                // Verifica se o campo "formattedAmount" está presente dentro do campo tuition
                expect(response.body.tuition).to.have.property('formattedAmount'); 
                // Verifica se o campo "dueDate" está presente dentro do campo tuition
                expect(response.body.tuition).to.have.property('dueDate'); 
                // Verifica se o campo "status" está presente dentro do campo tuition
                expect(response.body.tuition).to.have.property('status'); 

                // Verifica se o campo "status" está presente no corpo da resposta
                expect(response.body).to.have.property('student');   

                // Verifica se o campo "firstName" está presente dentro do campo student
                expect(response.body.student).to.have.property('firstName'); 
                // Verifica se o campo "lastName" está presente no corpo da resposta
                expect(response.body.student).to.have.property('lastName'); 
                // Verifica se o campo "birthDate" está presente no corpo da resposta
                expect(response.body.student).to.have.property('birthDate'); 
                // Verifica se o campo "cpf" está presente no corpo da resposta
                expect(response.body.student).to.have.property('cpf');

            });
    })

})