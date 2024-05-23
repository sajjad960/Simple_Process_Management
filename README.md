# Overview

Simple Process Management

- For given task I built this application, implemented process actions services (process creation, get single and all process and delete process).

## Technology used

- Nodejs (version - v16.20.1)
- MongoDB (version - 6.0.9)

## Inatallation and Run

1.  Install npm packages:

```bash
npm i
```

2. Setup environment variables:

Copy `.env.example` to `.env` and you can also replace `.env` configurations with yours.

3. Start app

```bash
npm run start
```

Now API will available at 6001 port, or other you configured

4. Seed data.

- for this simple application you don't need any seed data.

## API's

- ✴️ Please import Postman collection for test api through Postman. <br>
Folder location (seed/postman_data)

* Process
  - List of process:
    - GET `/api/v1/process`
  - Add new process:
    - POST `/api/v1/process`
  - Single process:
    - GET `/api/v1/process/:id`
    - pass `id` as a 
  - Delete process:
    - Delete `/api/v1/process/:id`
