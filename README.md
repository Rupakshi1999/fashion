Accessing the API:
GET request:
  Get All
  Get by ID
  Get after filtering
  Get after filtering and sorting
  [<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://god.gw.postman.com/run-collection/31110876-56c4a6d8-1428-4660-b80b-a30708a90081?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D31110876-56c4a6d8-1428-4660-b80b-a30708a90081%26entityType%3Dcollection%26workspaceId%3D4676b0ec-26e7-4b06-9708-a5f4babe2015)
  

#### User Model

Email Validation Regex

```regex
/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
```

#### Register User

- Validate - name, email, password - with Mongoose
- Hash Password (with bcryptjs)
- Save User
- Generate Token
- Send Response with Token

#### Login User

- Validate - email, password
- If email or password is missing, throw BadRequestError
- If no user or password does not match, throw UnauthenticatedError
- If correct, generate Token
- Send Response with Token
