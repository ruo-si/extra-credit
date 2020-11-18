# Extra-Credit
   ![https://travis-ci.com/github/rialee/extra-credit/builds/202278627](https://travis-ci.com/rialee/extra-credit.svg?branch=main&status=passed)
   ![https://app.codacy.com/gh/rialee/extra-credit/dashboard](https://app.codacy.com/project/badge/Grade/d54fbe2005594f5884b61dbdf22ea604)
  ![express](https://img.shields.io/npm/l/express)
  ![Extra-Credit](https://img.shields.io/github/languages/top/rialee/extra-credit)
  [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)

  - by *[Skyler Rencher](https://github.com/skycode20), [Victoria Lee](https://github.com/rialee), [Cielle Carlton](https://github.com/ciellecarlton), [Richard Katsnelson](https://github.com/COUCHPUMA)*
  
  ## Description    

  Extra Credit is a financial management application that optimizes credit card spending. It is an application that was born out of the desire to educate the everyday person on how to leverage credit card perks to get the best value out of credit cards. We wanted to do this in an intuitive way that is easy to use.

  The goal of Extra Credit was to immediately show users how their money spent would be coming back to them in the form of card perks such as miles, cash back, and rewards in the form of points. The user can select which cards they potentially want to apply for and then add the amount they would be spending and instantly the rewards will be calculated based on the dollar amount spent. 

  There were a few challenges with the development of this application:
  * Keeping the user interface on one page without sacrificing functionality. We had to use modals (`pop-ups`) that were fed the right information that normally could be run on a different page.
  * Getting the credit card calculator functions to work properly with the user input. A challenge with that was that the input wasn't being pushed into the calculate functions. Also the calcuate functions, once operational was doubling its calculations.

  In the future we would like to expand the capability of the application by having the credit card data updated in real time as they are change by the respective credit card companies. Also expanding the user sign up functionality to include a secure username and password system that saves their account information securely in the database. In addition, the application we hope to expand the fun fact library to make it more specific to the needs of the user so that they can look up exactly which topic they would like to learn about.

  ## Table Of Contents    

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation    

   Install the required npm packages such as inquirer, file system, path, and os. Also install Node.js as it is essential for running the CLI application. Then download all of the project's code from the repository. Once all of that has been completed, run ```node server.js``` to initiate the program.

  To install the **Extra Credit Application** please follow these steps:

  1. Download all of the project's source files `(clone the GitHub repository)`.
  2. Ensure your terminal is inside of the current folder that contains the source files.
  3. Install the following **NPMs** `(Node Package Managers)` in the system terminal:
        * Node.js
        * Express (command: ```npm i express```)
        * Express-Handlebars (command: ```npm i express-handlebars```)
        * MySQL2 (command: ```npm i mysql```)
        * Sequelize (command: ```npm i sequelize```)
        * ESLint (command: ```npm i eslint```)
        * **Or just ```npm i``` that will install the packages within the `package.json` file.**

  4. Create a `.env` file inside of the main folder by using the command `touch .env` inside of the CLI. Then inside of the file enter the following code at the top of the document: `LOCAL_MYSQL_PASS=password`. Replace the password with your actual MySQL password. Your password will be stored locally and will not be tracked online. This will allow you to make changes directly to your SQL database.

  5. Go to the `schema.sql` file inside of the `db` directory and copy all of the code. Paste the code inside of your MySQL Workbench to create the table. Doing so will allow the app to access your table form the application.

  ## Usage    

   Extra Credit is a very intuitive application to use that simplifies your experience. There are 5 main buttons `Sign Up, My Wallet, Calculator,Credit Card Browser, & Extra Credit`. The each have the following functions:
   
   * Sign Up: The user can enter their first and last names in the user input and press the sign up button. This will enter their name into the database and essentially create their account with a unique ID that tracks the selections inside of the `My Wallet` and the `Credit Card Browser`.
   * My Wallet: The user can view the selection of card they made inside of the `Credit Card Browser`.
   * Calculator: The user can enter in a dollar amount and calculate the rewards of the card(s) you want to apply for. It will show the benefits of each card instantly so the user can make an informed decision.
   * Credit Card Browser: Select a card and add it to the wallet so that the user can keep track of the credit cards that they would like to apply for.
   * Extra Credit: A random fun fact about maintaining good credit and other valuable financial tips is generated for the user's benefit. Each time the button is pressed a new fact is shown.
 
   <!-- <br>
   <p align=center>   
   <img src="Assets\img\userprompts.jpg" alt="picture of user prompts in the terminal" width= 50% height= 50%>
   <img src="Assets\img\personnelpage.jpg" alt="picture of user generated personnel page" width= 50% height= 50%>
   </p>
   <br> -->


  ## License    

  The express is covered under the following license: ![express](https://img.shields.io/npm/l/express)

  ## Contributing     

  If you are interested in contributing to this project please adhere to the set of guidelines set forth by the [Contributor Covenant](https://www.contributor-covenant.org/version/2/0/code_of_conduct/). If any questions about the contributor guidelines feel free to contact me at skyler.rencher@gmail.com.

      
  

  ## Tests    

  Utilizing Travis.yml helped to keep the code functional and ESLint checked the code across the board to ensure it was formatted properly among each contributor. 

  Trial and error debugging was utilized each step of the way to make sure each new line of code was functional and didn't cause the app to crash.

  ## Questions    

  If you have any questions about the project feel free to reach out to me on via email: skyler.rencher@gmail.com or via Git Hub: https://github.com/rialee.
  
  ## Links

  * [Extra-Credit Repo](https://github.com/rialee/extra-credit)
  * [Extra-Credit Application](https://extra-credit-app.herokuapp.com/htmlRoutes)
  * [Extra-Credit Demo Video](https://github.com/rialee/extra-credit)