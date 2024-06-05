describe("Usuário solicita dados da matrícula de um aluno regular", () => {
    const requestTest = {
        method: 'GET',
        url: 'http://localhost:8080/v1/matriculas/4653421',
        headers: {
            'X-API-KEY': 'unime-qualidade-oficial2',
            'Content-Type': 'application/json'
        }
    };
    it("Verifica se resposta contém TODOS os dados da matrícula e conteudo", () => {
        cy.request(requestTest)
            .then((response) => {
                // Verifica se o status code da resposta é 200
                expect(response.status).to.eq(200);

                // Verifica se o campo "id" está presente no corpo da resposta
                expect(response.body).to.have.property('id')
                    .to.not.be.empty;

                // Verifica se o campo "courseName" está presente no corpo da resposta
                expect(response.body).to.have.property('courseName')
                    .to.not.be.empty;
                
                // Verifica se campo courseName retorna string maior que 3
                expect(response.body.student.birthDate.length).to.be.greaterThan(3)

                // Verifica se o campo "tuition" está presente no corpo da resposta
                expect(response.body).to.have.property('tuition')
                    .to.not.be.empty;

                // Verifica se o campo "amount" está presente dentro do campo tuition
                expect(response.body.tuition).to.have.property('amount')
                    .not.to.be.null;

                // Verifica se campo amount retorna valor maior que 0
                expect(response.body.tuition.amount).to.be.gt(0);
               
                // Verifica se o campo "formattedAmount" está presente dentro do campo tuition
                expect(response.body.tuition).to.have.property('formattedAmount')
                    .to.not.be.empty; 

                // Verifica se o campo "dueDate" está presente dentro do campo tuition
                expect(response.body.tuition).to.have.property('dueDate')
                    .to.not.be.empty;

                // Verifica se o campo "status" está presente dentro do campo tuition
                expect(response.body.tuition).to.have.property('status')
                    .to.not.be.empty; 

                // Verifica se o campo "status" está presente no corpo da resposta
                expect(response.body).to.have.property('student')
                    .to.not.be.empty;   

                // Verifica se o campo "firstName" está presente dentro do campo student
                expect(response.body.student).to.have.property('firstName')
                    .to.not.be.empty; 

                // Verifica se o campo "lastName" está presente no corpo da resposta
                expect(response.body.student).to.have.property('lastName')
                    .to.not.be.empty; 

                // Verifica se o campo "birthDate" está presente no corpo da resposta
                expect(response.body.student).to.have.property('birthDate')
                    .to.not.be.empty; 
                // Verifica se o campo "cpf" está presente no corpo da resposta
                expect(response.body.student).to.have.property('cpf')
                    .to.not.be.empty;
                // Verifica se retorna quantidade de caracteres igual a 11
                expect(response.body.student.cpf).to.have.lengthOf(11)

            });
    })

})