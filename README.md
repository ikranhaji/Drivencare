# CarCar

Team:
* Ikran Haji- Automobile sales
* Jasmine Bagha - Automobile Services

## Design
This microservices project was designed using Django for the backend features and React for the frontend features. The Django back end was created using RESTful APIs. The React front end used Bootstrap for styling the pages with headers, columns, and navigation bars.

## Service microservice
The servicers microservice had three models:
1. The AutomobileVO model-this model was created to allow for polling of data from the inventory application. The vin number was one of the main peices of data that was polled to allow for updated information to be passed on to the services application.
2. Technician model-this model was created to allow for the creation, deletion, and list view of technicians
3. Appointment model- this model was created to allow for the creation, deletion, and list view of appointments. This model also allowed for each appointment to have a status of created, finished or cancelled. This albility allowed for the frontend user to create appointments, see a list of all appointments and also mark is an appointment was finished or cancelled. The AutomobileVO was also integrated to deterimine if a specific customer was a VIP depending on their vehicle's licence plate number matching the intentory of car licence plate numbers.

## Sales microservice
There are four models that were used to create salespeople, customers, and sales.
The Salesperson Model is being used in the views to create, list and delete salespeople
The customer models is being used to create, list and delete customers
The sales models has three foreignKey which grab infromation from the customer, salesperson and automobileVO model in order to be able to use that information to create sales since each sale needs to include a customer, salesperson, and car.
The automobileVO model is grabbing automobile information from the inventory microservice using the poller in order to provide that information to sales microservice.

Data for endpoints:
To create a Salesperson:
{
	"first_name": "Test",
	"last_name": "test",
	"employee_id": 3
}

To create a customer :
{
	"first_name": "Test",
	"last_name": "Test",
	"address": "145788 Ln N",
	"phone_number": "612-587-8978"
}

To create a sale:
{
	"customer": 2,
	"price": 20000,
	"salesperson": 2,
	"automobile": "1C3CC5FB2AN120174"
}
Must use an existing Id of customer and salesperson(not Employee-Id but the Id values instead) and an existing VIN in Inventory Automobiles in order to successfully create a sale.
