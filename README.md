# αlphaPulse
![αlphaPulse Logo](/public/favicon.ico)

## Overview
Are you tired of struggling to achieve your fitness goals alone?

At αlpha1, we are passionate about helping you achieve your overall health, not just your physical health. We believe that working together and staying committed is the key to success.

That's why we created αlphaPulse, the fitness app that connects you to your friends' and familys' workouts. With αlphaPulse, you can workout with your loved ones no matter where they are in the world, creating a sense of social interaction and accountability. Challenge yourself and others, log your sessions, and track your progress.

αlphaPulse empowers everyone to pursue their fitness goals. Join us on our shared fitness journey today

## Features
[] The feature that were placed within our application were
[] The "About" page has a Carousel installed to provide the user with a world renoun view of what each developer who created this app.
[] What is included in the Carousel are embeded links to each developers LinkedIn profile, Github page.
[] "Sign-Up Modal" give the user the ability/ experience to sign up through a pop-up window.
[] "Sign-In Modal" allows the user to experience the welcome sign-in pop-up window to join in.
[] "Not Found" sends the user to a not found page of a movable image, when the user is sent to an incorrect page the will find themselves staring down a movable image of "Harry Squatter- the boy who lifts"
[] "Workout" page provides the user with the experience of viewing a list of workouts as well as creating their own workouts with a pop of color feature while highlighting each individual workout.

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

[GET] **/users/logout** Destroys an existing session

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

1. Fork the repository from GitHub.

2. Open up your terminal and navigate to the project directory.

3. Run `bundle install` to install the required Ruby gems and dependencies.

4. Run `yarn` to install the required JavaScript packages and dependencies.

5. Run `rails db:create` to create a new database for the project, if one does not already exist.

6. Run `rails db:migrate` to apply any pending database migrations to the database.

7. Run `rails db:seed` to seed the database with sample data (users, workouts, comments, etc.), if applicable.

8. Run `rails s` to start the Rails server and begin serving the application.

By following these steps, you should be able to get the project up and running on your local machine.

## Dependencies
* package.json dependencies: {
  "dependencies": {
    "@babel/preset-react": "^7.18.6",
    "@rails/activestorage": "^7.0.4-3",
    "@rails/ujs": "^7.0.4-3",
    "@rails/webpacker": "5.4.4",
    "@testing-library/react": "^14.0.0",
    "ag-grid-community": "^29.2.0",
    "babel-plugin-transform-react-remove-prop-types": "^0.4.24",
    "jest": "^29.5.0",
    "prop-types": "^15.8.1",
    "react": "^18.2.0",
    "react_ujs": "^2.6.2",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.10.0",
    "reactstrap": "^9.1.9",
    "webpack": "^4.46.0",
    "webpack-cli": "^3.3.12"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/user-event": "^14.4.3",
    "jest-environment-jsdom": "^29.5.0",
    "webpack-dev-server": "^3"
  },
  "scripts": {
    "test": "jest --watch",
    "test-watch": "jest --watch"
  },
  "jest": {
    "moduleNameMapper": {
      "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/mocks/fileMock.js",
      "\\.(css|less)$": "<rootDir>/mocks/fileMock.js"
    },
    "testEnvironment": "jsdom",
    "roots": [
      "app/javascript"
    ],
    "coveragePathIgnorePatterns": [
      "/app/javascript/components/App\\.js"
    ]
  }
}

* Gemfile dependencies: source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.2.0"

# Bundle edge Rails instead: gem "rails", github: "rails/rails", branch: "main"
gem "rails", "~> 7.0.4", ">= 7.0.4.3"

# The original asset pipeline for Rails [https://github.com/rails/sprockets-rails]
gem "sprockets-rails"

# Use postgresql as the database for Active Record
gem "pg", "~> 1.1"

# Use the Puma web server [https://github.com/puma/puma]
gem "puma", "~> 5.0"

# Use JavaScript with ESM import maps [https://github.com/rails/importmap-rails]
gem "importmap-rails"

# Hotwire's SPA-like page accelerator [https://turbo.hotwired.dev]
gem "turbo-rails"

# Hotwire's modest JavaScript framework [https://stimulus.hotwired.dev]
gem "stimulus-rails"

# Build JSON APIs with ease [https://github.com/rails/jbuilder]
gem "jbuilder"

# Use Redis adapter to run Action Cable in production
# gem "redis", "~> 4.0"

# Use Kredis to get higher-level data types in Redis [https://github.com/rails/kredis]
# gem "kredis"

# Use Active Model has_secure_password [https://guides.rubyonrails.org/active_model_basics.html#securepassword]
# gem "bcrypt", "~> 3.1.7"

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ]

# Reduces boot times through caching; required in config/boot.rb
gem "bootsnap", require: false

# Use Sass to process CSS
# gem "sassc-rails"

# Use Active Storage variants [https://guides.rubyonrails.org/active_storage_overview.html#transforming-images]
# gem "image_processing", "~> 1.2"

group :development, :test do
  # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
  gem "debug", platforms: %i[ mri mingw x64_mingw ]
end

group :development do
  # Use console on exceptions pages [https://github.com/rails/web-console]
  gem "web-console"

  # Add speed badges [https://github.com/MiniProfiler/rack-mini-profiler]
  # gem "rack-mini-profiler"

  # Speed up commands on slow machines / big apps [https://github.com/rails/spring]
  # gem "spring"
end


gem "webpacker", "~> 5.4"

gem "react-rails", "~> 2.6"

gem "devise", "~> 4.9"

gem "bootstrap", "~> 5.2"

gem "rspec-rails", "~> 6.0"

gem 'simplecov', require: false, group: :test

gem 'warden'

