# Wikipedia-Search-Testing

This repo is Free-now frontend assignment.
We need to test and automate the Wikipedia’s search feature in this assignment.


Flow included in this repo are:

1. Search for “Apollo 11” using the language of your choosing
2. Select one of the search results
3. Open the article page
4. Verify you are on the right page


Following tools and technologies has been used for the task
1. Cypress - for UI automation
2. Node.js - prerequiste for Cypress


Steps to install Cypress

1. Install node.js and configure it's path, verify the version of node.js and npm
   package should be installed in your system
   
   node -v 
   v16.17.0
   
   npm -v
   8.15.0
   
2. Install cypress as a dev dependency
   
   npm install cypress --save-dev
   
3. Once cypres is installed run the following command to open the test runner
   
   npx cypress open
   
4. Once you open the test runner it will ask you to click on e2e or component testing
   for this task will continue with e2e testing and select the browser to launch the 
   predefined tests which comes inside the e2e folder.
   
5. It supports firefox, elektron and chrome browser for the automation, will continue
   with the chrome browser and launch the test, open any IDE(vs code) and open the new created
   cypress folder inside it.
   
6. start adding your test cases inside the e2e folder, which contains your test cases, for 
   this demo we will be following page object approach so will create the directory structure
   accordingly.
   
   
