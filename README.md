# website
The new HURC website

To run locally,

* Install Node and  npm:
  * If you're on a Mac:
    * first install brew by running `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
    * Then install node and npm by running `brew install node && brew install npm`
  * If you're on Linux:
    * run `sudo apt-get install node && sudo apt-get install npm`
* Install the gulp cli by running `sudo npm install --global gulp-cli`
* clone the repository
* run `npm install`
* run `gulp build-images`
* run `sudo npm start`

The site should now be running at http://localhost:80/
