// import * as supertest from 'supertest-as-promised'
// import { request } from 'http';
// import app from '../../app'
// import { Payable } from './payable.model'
// import { expect } from 'chai'

// const request = supertest(app)

// describe('GET /api/payable/visit', () => {
//     var id: string;
//     before(async () => {
//         await Payable.deleteMany({})
//     })

//     after(async () => {
//         await Payable.find({id: id}).remove().exec()
//     })

//     it('creates a new payable', async () => {
//         const payable = await request({
//             url: "/api/payable",
//             body: {
//                 "value": 1232132,
//                 "description": "aaaaa",
//                 "payment_method": "credit_card",
//                 "card": {
//                     "number": "123123989213",
//                     "owner": "Bruno Vieira",
//                     "expire_date": "2020-03-29T13:34:00.000",
//                     "cvv": 123
//                 },
//                 "payment_date": "Thu Aug 01 2019 20:04:44 GMT-0300"
//             },
//             json: true
//         })
//         expect(payable.status).to.equal(200)
//         expect(payable.body).to.have.property('status')
//         id = payable.body._id;
//     })
//     // Tem que criar cenário de teste pras regras de negócio

//     it('returns all payables', async () => {
//         const payable = await request.get('/api/payable')
//         expect(payable.status).to.equal(200)
//         expect(payable.body).to.have.property('paid')
//         expect(payable.body).to.have.property('waiting_funds')
//     })

// })
