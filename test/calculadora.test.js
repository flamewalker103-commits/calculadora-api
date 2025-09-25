const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');

chai.should();
chai.use(chaiHttp);

describe('Calculadora API', () => {
    it('debería sumar dos números', (done) => {
        chai.request(server)
            .post('/sumar')
            .send({ a: 5, b: 3 })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('resultado').eql(8);
                done();
            });
    });
    it('debería restar dos números', (done) => {
        chai.request(server)
            .post('/restar')
            .send({ a: 5, b: 3 })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('resultado').eql(2);
                done();
            });
    });
    it('debería multiplicar dos números', (done) => {
        chai.request(server)
            .post('/multiplicar')
            .send({ a: 5, b: 3 })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('resultado').eql(15);
                done();
            });
    });
    it('debería dividir dos números', (done) => {
        chai.request(server)
            .post('/dividir')
            .send({ a: 6, b: 3 })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('resultado').eql(2);
                done();
            });
    });
    it('debería manejar división entre cero', (done) => {
        chai.request(server)
            .post('/dividir')
            .send({ a: 6, b: 0 })
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.have.property('error').eql('No se puede dividir entre cero.');
                done();
            });
    });
});
