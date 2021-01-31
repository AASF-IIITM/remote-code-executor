# Remote-Code-Executor
RCE is a Remote Code Executor, as the name suggests Is a Docker-based sandbox environment to run a code snippet. It will create a new file for each code input, execute it, delete the file and return the output. It supports major languages, i.e., C++, JavaScript and Python, and can be extended to other language support too.

# Features:
- Backend APIs and logic to handle the submitted code, execute it, and return the results. 
- Can be extended to an Online Code Judge and full-fledged coding/interview platform.

# Tech stack: 
- Node.js
- Javascript
- Docker 
- Bash scripting
- Nginx
- Github Actions

# Concepts Used
- Frontend and Backend were made separate for making it possible to scale them individually.
- exec function from `child-processes` package in NodeJS was used to execute programs.
- Application was containerized and is present on DockerHub, so that it can be used anywhere.
- Server has a Nginx Web Server front, for high performance and stability.
- HTTPS for the server was made possible by using Certbot and Lets Encrypt.
- Concepts of Functional Programming was used to make code more readable and modular.
- A CI/CD pipeline was setup using Github Actions for Quick Deployment.

# Steps to Run Locally
- Clone the Repo on your local computer
- Run `npm install` to install all the packages
```bash
npm install
```
- Run `npm start` to start the server locally
```bash
npm start
```
- Now you can view the server live at `http://localhost:3000`

# APIs
## `/execNode`, `/execCpp`, `execPython`
### Request Format
```json
{
  "code": "console.log(\"Hello World\");"
}
```

### Response Format
```json
{
  "isError": "true or false based on the code",
  "output": "EXECUTION OUTPUT or ERROR",
  "message": "Error Message if there was any"
}
```

# Basic Architecture
<img src="https://i.ibb.co/zbBg3xQ/Basic-Arch.png" alt="Basic Architecture" >

# CI/CD Flow
<img src="https://i.ibb.co/wM8CcgM/CI-CD-Flow.png" alt="CI CD Flow">

# Hosted Link
The server is hosted and live at [rce.manish.codes](https://rce.manish.codes)
