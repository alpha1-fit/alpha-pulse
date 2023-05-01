# αlphaPulse
![αlphaPulse Logo](/public/favicon.ico)

## Overview
Are you tired of struggling to achieve your fitness goals alone?

At αlpha1, we are passionate about helping you achieve your overall health, not just your physical health. We believe that working together and staying committed is the key to success.

That's why we created αlphaPulse, the fitness app that connects you to your friends' and familys' workouts. With αlphaPulse, you can workout with your loved ones no matter where they are in the world, creating a sense of social interaction and accountability. Challenge yourself and others, log your sessions, and track your progress.

αlphaPulse empowers everyone to pursue their fitness goals. Join us on our shared fitness journey today

## Features

### User management

When using our app the user is experiencing a devise react monolithic app. The user has the ability to create, render/read, update, and delete. The user will see a page and or modal for each functionality and has been implemented from react-strap or created by developers. These forms are from reactstrap and the user has the ability input information to change or create. The user is able to sign-in, sign-out, and sign-up.

### Workout management
* As a user  of αlphaPulse, when logged-out, you are able to view and interact with a set mock workouts to essentially show the a viewer of the application a preview of the what they'll experience when using the αlphaPulse app.

* As a user of αlphaPulse, regardless of being logged-in or logged-out, you are able to click the see details button to view a workouts details in its own separate view

* As a user of αlphaPulse, when logged-in, you are able to create descriptive workouts that are displayed on the workouts index page along side other workouts created by other users of the application.

* As a user of αlphaPulse, when logged-in, you can edit as well as delete workouts you have created 

### Comments
* As a user  of αlphaPulse, when logged-out, you are able to view and interact with a set mock workouts that contain a set of mock comments for each respective workout

* As a user of αlphaPulse, when logged-in, you are able to click see details on a workout and see a comment created by a user of αlphaPulse for that specific workout

* As a user of αlphaPulse, when logged-in, you are able to create descriptive comments that are displayed on the workout show page along side other comments created by other users of the application for that specific workout.

* As a user of αlphaPulse, when logged-in, you can edit as well as delete comments you have created 

### API Endpoints
This application uses several models and controllers through Ruby on Rails. All views are managed on the frontend through React. The available routes, controllers, and methods are:

#### User registration
[parameters]: username:string, email:string, password:string, password_validation:string, photo:string

[POST] **/users/signup** Creates a new user

#### User sessions
[parameters]: username:string, password:string

[POST] **/users/login** Creates a new session

[GET] **/users/logout** Destorys an existing session

#### Workouts
[parameters]: name:string, workout_type:string, duration:integer (number of seconds), schedule:datetime, description:text, user_id:integer

[POST] **/workouts** Creates a new workout

[GET] **/workouts** Fetches an array of all workouts

[PATCH] **/workouts/:id** Updates the values of this workout

[DELETE] **/workouts/:id** Destroys this workout

#### Comments
[parameters]: title:string, comment:text, workout_id:integer, user_id:integer

[POST] **/comments** Creates a new workout

[GET] **/comments** Fetches an array of all workouts

[PATCH] **/comments/:id** Updates the values of this workout

[DELETE] **/comments/:id** Destroys this workout

## Running the project

## Dependencies
* See dependencies.txt
