"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greeting_1 = require("./greeting");
describe('Greeting Test', function () {
    it('must return the correct greeting', function () {
        expect(greeting_1.Greeting.sayHello('World!')).toBe('Hello World!');
    });
});
