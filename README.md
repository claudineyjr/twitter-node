# twitter-node
An simple application that get tweets to show how docker works and a manifest.yml to configure your cloud application on IBM Cloud

# General Instructions
Fill the fields of the file ./app/config/credentials.js with your twitter infromations

# RUN LOCALLY
```sh
$ npm install
$ npm start
```

# RUN ON A DOCKER CONTAINER
To build a docker image:
```sh
$ docker build -t <name-of-your-image> .
```

DONT FORGET THE DOT AT THE END OF THE COMMNAD!!!!!

# TO RUN ON IBM CLOUD
Create an IBM Cloud account and install the ibmcloud CLI before running this commands
Make sure that you've already have configured successfully you IBM Cloud account

```sh
$ ibmcloud cf login
$ ibmcloud cf push
```

# CONTACT:
Linkedin: /in/clauidney-junior
Facebook: /claudiney.cuca
Twitter: @claudineyjr
Instagram: @claudineyjr
YouTube: /ClaudineyJuniors