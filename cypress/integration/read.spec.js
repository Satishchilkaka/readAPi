
describe('read email', () => {
    let reg;
let userName = 'as1'
            it(`read email link for ${userName}`, {
                retries: {
                    "runMode": 1, "openMode": 1
                }
            }, async () => {
            
                    const emails = await cy.task("getEmails", userName).then(emails => {
                        cy.wrap(emails).then((emails) => {

                            emails.filter(email => email.urls.filter(url => url.includes("autoserve1.com").length < 0))[0];

                            emails.forEach(email => reg = email.urls[0])

                        })
                    }).then((reg) =>{

                        console.log('body is', reg[0].body)
                        /*let content = reg[0].body
                        //let linkurl = /(<[Aa]\s(.*)<\/[Aa]>)/g;
                        let result = $("<div/>").html(content).text()
                        console.log("res", result)
                        cy.visit(reg[0].body) */
                    })                
            });
        })
