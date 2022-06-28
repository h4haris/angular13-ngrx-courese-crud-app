# ANGULAR13-NGRX-COURSE-CRUD-APP

Demo Project to showcase NgRx implementation by creating a crud app for courses. 

### Optimistic UI
Optimistic UI is a pattern that you can use to simulate the results of a state mutation and update the UI even before receiving a response from the server.

In this particular application, we are following the same pattern. As explained above, when creating, updating, and deleting a course, the state and the UI are updated even before receiving a response from the REST API.

## Development server

```bash
npm install
```

1. Change directory to server or client respectively one by one and run the command above to install all the packages inside folder.

2. Run below command for starring server and client inside each directory.

```bash
npm run start
```

3. Open [http://localhost:4200](http://localhost:4200) with your browser to see the application.

## Reference
See [NgRx Basics and terms](https://betterprogramming.pub/angular-getting-started-with-ngrx-75b9139c23eb)
See [Step by step guide for implementation](https://betterprogramming.pub/angular-building-a-crud-application-with-ngrx-40e5f1c0b50c)