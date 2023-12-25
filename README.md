# Application Tracker for Jobs #

### Description

Web application to keep track of job application statuses and easily navigate history of job applications. Useful feature to upload resumes for each job application to help with keeping track of different resume and cover letter versions that were used to apply for a particular role.  

#### Inspiration:
With the current job market there's a consistent need to update resumes to fit description/keywords of each role. Sometimes we need to apply to 100s of roles because we get an offer and in the midst of all that it's easy to forget the resume we used to apply for a posting. Over time we also loose sight of how much we have improved and by goal is to make the job hunting process more streamline, as well help us all see growth in our skills over the years.

#### Future plans: 
Adding graphs to easliy visualize the stages of different job applications. My plan is to show different metrics like performance by job title or required skills for a job to help understand the roles that best fit the users current skills and also highlight skills that are missing based on weather the user Interview rounds with companies. 
### Set up: 
	- [ ] Fork this github Repo
	- [ ] Clone your Froked Repo to your local environment 
	- [ ] Cd into the Project directory
	- [ ] run `npm install` to get all the local dependencies
	- [ ] add .env file with the following values: 
```
MONGO_PASSWORD = 
MONGO_URI = 
JWT_SECRET = 
JWT_LIFETIME = 20d
```
#### _Server_: 
- [ ] Server will run on port 4000 unless a PORT variable is added to .env
- [ ] From the Project directory run `npm start` or `npm run dev`
  
#### _Client_: 
- [ ] Client will run on port 3000
- [ ] `cd '/job-tracker/client/application-tracker'`
- [ ] Run `npm start`
  
### Accessing the API:
 _Jobs_
 _Login/register_
 _File Uploader_
  
#### Run the API in postman collection:
  [<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://god.gw.postman.com/run-collection/31110876-56c4a6d8-1428-4660-b80b-a30708a90081?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D31110876-56c4a6d8-1428-4660-b80b-a30708a90081%26entityType%3Dcollection%26workspaceId%3D4676b0ec-26e7-4b06-9708-a5f4babe2015)
  

### Models
#### _User_ Model
#### _Jobs_ Model

Email Validation Regex

```regex
/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
```

#### _Register User_

- Validate - name, email, password - with Mongoose
- Hash Password (with bcryptjs)
- Save User
- Generate Token
- Send Response with Token

#### _Login User_

- Validate - email, password
- If email or password is missing, throw BadRequestError
- If no user or password does not match, throw UnauthenticatedError
- If correct, generate Token
- Send Response with Token
