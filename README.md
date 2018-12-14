# FoodTruck App
### Install
Install latest node version https://nodejs.org/en/download/
In the same directory as package.json run `npm install` or `yarn`

### Running Application
In root application directory run `node app.js`
If there are more than 10 available options application will prompt you to see more.

### Task
The task I was set to accomplish was to write a command line application to query the SFGov API for food truck data and return it in a table format. The results should be paginated by groups of 10, alphabetically sorted by name, and should only return trucks that are currently open by hour and day. In addition to this, the user  should be able to paginate through subsequent pages by some form of user input.


### Writeup
I chose to utilize Node for my application because it is my preferred language for this type of project. The application itself is fairly small and I utilized a couple of node-modules for convenience sake (moment, axios, columnify, prompt). As far as technical decisions, I chose to go with client side pagination rather than server side pagination after examining the sample database and seeing that the dataset we were consuming was fairly small. If we were to make this a scalable production ready application, I would probably implement server side pagination via their api and make subsequent requests rather than storing the entire data set on the client.

If we were to rebuild this application as a web app rather than a node application, I would remove some of the libraries that I have used for rendering (such as “columnify” and “prompt”) and I would instead output the view layer with “ReactJS”. I feel like this application does not require redux as it is still fairly simplistic. I would also want to change error handling in the web application so that rather than log the exception and exit the application, it would notify the user via an alert or modal that there was an error completing their  request.