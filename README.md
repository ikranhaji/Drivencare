# CarCar

Team:
* Ikran Haji- Automobile sales
* Jasmine Bagha - Automobile Services

## Design

## Service microservice

Explain your models and integration with the inventory
microservice, here.

## Sales microservice
There are four models that were used to create salespeople, customers, and sales. The sales model has three foreignKey which grab infromation from the customer, salesperson and automobileVO model in order to be able to use that information to create sales since each sale needs to include a customer, salesperson, and car. The automobileVO model is grabbing autombile information fromt the inventory microservice using the poller.
