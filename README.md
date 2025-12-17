
HTTP Method:

GET – Used to fetch /retrieve data,  No request body(Read)

POST – Used to create new data, uses request body to send data to API(Create)

PUT – Used to update existing data, uses request body to send data to API(Update)

PATCH – partially update data

DELETE – Used to Delete Data



HTTP Status Codes I learned:

1xx→Informational(rarely used)

2xx→Success

200→OK, 

201→Created,

204→No Content

3xx→ Redirect(rarely used)

301→Moved Permanently, 

304→Not Modified

4xx→(Client Errors) 

400→Bad Request

401→Unauthorized(not logged-in user, no token/expired token)

403→Forbidden(logged-in but not allowed)

404→Not Found(page/resources/url not found)

405→Method Not Allowed

409→Conflict(duplicate email, phone etc.)

422→Validation Error

5xx→(Server Errors) 

500→Internal Server Error

502→Bad gateway

503→Server unavailable

504→Timeout Error
