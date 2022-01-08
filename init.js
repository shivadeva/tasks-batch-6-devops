db = new Mongo().getDB("admin");

// create admin user

db.createUser({
  user: "admin",
  pwd: "admin",
  roles: [
    {
      role: "root",
      db: "admin"
    }
  ]
});

db = new Mongo().getDB("functionhalls");

db.createUser({
  user: "suntech",
  pwd: "suntech",
  roles: [
    {
      role: "readWrite",
      db: "functionhalls"
    }
  ]
});

db.createCollection("functionhall_reference_data");
db.functionhall_reference_data.insertOne ({  
  "firstName" : "Raghu",
    "lastName" : "Raghavendra",
    "city" : "hyderabad",
    "state" : "Telangana",
    "zipcode" : "500084",
    "ownerContactNumber" : "+91-7766655558",
    "functionhall" : [ 
        {
            "name" : "Nimmala Convention Hall",
            "ownerId" : "1",
            "ownerFirstName" : "Raghu",
            "ownerLastName" : "Raghavendra",
            "maximumguest" : 0,
            "functionhallContactNumber" : "+91-5667788899",
            "street" : "kompally",
            "state" : "Telangana",
            "city" : "hyderabad",
            "zipcode" : 500014,
            "imageUrl" : [ 
                "https://s3.ap-south-1.amazonaws.com/suntechnoservices-javadevolpers/1592760593696-function-halls-booking-500x500.jpg", 
                "https://s3.ap-south-1.amazonaws.com/suntechnoservices-javadevolpers/1592760593696-function-halls-booking-500x500.jpg"
            ],
            "corelationId" : "1234"
        }
    ],
    "accountdetails" : [ 
        {
            "currency" : "inr",
            "accountnumber" : NumberLong(0)
        }
    ],
    "_class" : "com.vedika.functionhall.model.Owner"

})

db.functionhall_reference_data.insertOne ({  
  "firstName" : "Raghu",
    "lastName" : "Raghavendra",
    "city" : "hyderabad",
    "state" : "Telangana",
    "zipcode" : "500084",
    "ownerContactNumber" : "+91-7766655558",
    "functionhall" : [ 
        {
            "name" : "Nimmala Convention Hall",
            "ownerId" : "5",
            "ownerFirstName" : "Raghu",
            "ownerLastName" : "Raghavendra",
            "maximumguest" : 0,
            "functionhallContactNumber" : "+91-5667788899",
            "street" : "kompally",
            "state" : "Telangana",
            "city" : "hyderabad",
            "zipcode" : 500014,
            "imageUrl" : [ 
                "https://s3.ap-south-1.amazonaws.com/suntechnoservices-javadevolpers/1592760593696-function-halls-booking-500x500.jpg", 
                "https://s3.ap-south-1.amazonaws.com/suntechnoservices-javadevolpers/1592760593696-function-halls-booking-500x500.jpg"
            ],
            "corelationId" : "1234"
        }
    ],
    "accountdetails" : [ 
        {
            "currency" : "inr",
            "accountnumber" : NumberLong(0)
        }
    ],
    "_class" : "com.vedika.functionhall.model.Owner"

})

db.functionhall_reference_data.insertOne ({  
  "firstName" : "Raghu",
    "lastName" : "Raghavendra",
    "city" : "hyderabad",
    "state" : "Telangana",
    "zipcode" : "500084",
    "ownerContactNumber" : "+91-7766655558",
    "functionhall" : [ 
        {
            "name" : "Nimmala Convention Hall",
            "ownerId" : "4",
            "ownerFirstName" : "Raghu",
            "ownerLastName" : "Raghavendra",
            "maximumguest" : 0,
            "functionhallContactNumber" : "+91-5667788899",
            "street" : "kompally",
            "state" : "Telangana",
            "city" : "hyderabad",
            "zipcode" : 500014,
            "imageUrl" : [ 
                "https://s3.ap-south-1.amazonaws.com/suntechnoservices-javadevolpers/1592760593696-function-halls-booking-500x500.jpg", 
                "https://s3.ap-south-1.amazonaws.com/suntechnoservices-javadevolpers/1592760593696-function-halls-booking-500x500.jpg"
            ],
            "corelationId" : "1234"
        }
    ],
    "accountdetails" : [ 
        {
            "currency" : "inr",
            "accountnumber" : NumberLong(0)
        }
    ],
    "_class" : "com.vedika.functionhall.model.Owner"

})

db.functionhall_reference_data.insertOne ({  
  "firstName" : "Raghu",
    "lastName" : "Raghavendra",
    "city" : "hyderabad",
    "state" : "Telangana",
    "zipcode" : "500084",
    "ownerContactNumber" : "+91-7766655558",
    "functionhall" : [ 
        {
            "name" : "Nimmala Convention Hall",
            "ownerId" : "3",
            "ownerFirstName" : "Raghu",
            "ownerLastName" : "Raghavendra",
            "maximumguest" : 0,
            "functionhallContactNumber" : "+91-5667788899",
            "street" : "kompally",
            "state" : "Telangana",
            "city" : "hyderabad",
            "zipcode" : 500014,
            "imageUrl" : [ 
                "https://s3.ap-south-1.amazonaws.com/suntechnoservices-javadevolpers/1592760593696-function-halls-booking-500x500.jpg", 
                "https://s3.ap-south-1.amazonaws.com/suntechnoservices-javadevolpers/1592760593696-function-halls-booking-500x500.jpg"
            ],
            "corelationId" : "1234"
        }
    ],
    "accountdetails" : [ 
        {
            "currency" : "inr",
            "accountnumber" : NumberLong(0)
        }
    ],
    "_class" : "com.vedika.functionhall.model.Owner"

})

db.functionhall_reference_data.insertOne ({  
  "firstName" : "Raghu",
    "lastName" : "Raghavendra",
    "city" : "hyderabad",
    "state" : "Telangana",
    "zipcode" : "500084",
    "ownerContactNumber" : "+91-7766655558",
    "functionhall" : [ 
        {
            "name" : "Nimmala Convention Hall",
            "ownerId" : "2",
            "ownerFirstName" : "Raghu",
            "ownerLastName" : "Raghavendra",
            "maximumguest" : 0,
            "functionhallContactNumber" : "+91-5667788899",
            "street" : "kompally",
            "state" : "Telangana",
            "city" : "hyderabad",
            "zipcode" : 500014,
            "imageUrl" : [ 
                "https://s3.ap-south-1.amazonaws.com/suntechnoservices-javadevolpers/1592760593696-function-halls-booking-500x500.jpg", 
                "https://s3.ap-south-1.amazonaws.com/suntechnoservices-javadevolpers/1592760593696-function-halls-booking-500x500.jpg"
            ],
            "corelationId" : "1234"
        }
    ],
    "accountdetails" : [ 
        {
            "currency" : "inr",
            "accountnumber" : NumberLong(0)
        }
    ],
    "_class" : "com.vedika.functionhall.model.Owner"

})


db.functionhall_reference_data.insertOne ({  
  "firstName" : "Raghu",
    "lastName" : "Raghavendra",
    "city" : "hyderabad",
    "state" : "Telangana",
    "zipcode" : "500084",
    "ownerContactNumber" : "+91-7766655558",
    "functionhall" : [ 
        {
            "name" : "Nimmala Convention Hall",
            "ownerId" : "1",
            "ownerFirstName" : "Raghu",
            "ownerLastName" : "Raghavendra",
            "maximumguest" : 0,
            "functionhallContactNumber" : "+91-5667788899",
            "street" : "kompally",
            "state" : "Telangana",
            "city" : "hyderabad",
            "zipcode" : 500014,
            "imageUrl" : [ 
                "https://s3.ap-south-1.amazonaws.com/suntechnoservices-javadevolpers/1592760593696-function-halls-booking-500x500.jpg", 
                "https://s3.ap-south-1.amazonaws.com/suntechnoservices-javadevolpers/1592760593696-function-halls-booking-500x500.jpg"
            ],
            "corelationId" : "1234"
        }
    ],
    "accountdetails" : [ 
        {
            "currency" : "inr",
            "accountnumber" : NumberLong(0)
        }
    ],
    "_class" : "com.vedika.functionhall.model.Owner"

})
