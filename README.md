# Ecommerce Udemy Course - Django and React

 
[TOC levels=2]: # "## Table of contents"

## Initial setup/configuration

Details on setting up local machine, including PyCharm, etc. for this course.

1. Create empty github repo
2. Clone newly created github repo in PyCharm
3. In PyCharm project, setup a venv for the project.
4. Add README.md and gitignore files to the repo and commit/push.


7/25 Steps:


## React Front End setup

Add a React front end project.

### Step 1 - Run npx command to create the react app.

Run the following command to create the react app in the root project folder.

`npx create-react-app frontend`

This adds a new folder called frontend/

This can be tested/confirmed by starting up the react frontend server.

In the frontend/packages.json file, there are npm commands that are defined.  These can be used as a starting point 
to add a PyCharm run configuration.  Note that usually the node command needs to be found and added (e.g. I used WSL 
and add /usr/bin/node).
At this point, there should be a Run option called "start".  Starting this will startup the react server and open 
the page (note, this takes a bit to startup).

```
cd frontend;
npm start;
```

Output from npx command.
```
Success! Created frontend at /mnt/c/Users/david/Dropbox/Programming/Python/PyCharmProjects/django-react-ecommerce-course/frontend
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd frontend
  npm start

```

### Cleanup frontend react components

Make updates to App.js, etc.

Update App.js to remove the gif.

## Backend Setup

### DJango

### AWS

## Database

### Postgres



