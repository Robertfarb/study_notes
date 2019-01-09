## Jenkins
* Each tab  (view) in the Jenkins dashboard holds projects or jobs that are categorized by their tab name
* Each build shows the last success and last failure, and you can click the clock on the right hand side in the row, in order to kick off a build at that moment
* In the lower left corner there is a build queue which shows what projects are queued and currently building as well
* To create a new build
  1) new item
  2) fill out project details... name, project type (freestyle project)
  3) You can copy tests / builds from an existing jenkins project.
  4) Add plugins / options / project details
  5) Point the jenkins system to the unit tests, or automation build files
    * add the repository URL, add a secure key, authentic key, and all correct backend corrections to give Jenkins permissions to talk to the bitbucket / gitlab folder. 
  6) Add the correct branchname to build from github
  7) Add the build trigger (addd numbers in text field that define the times to build the project at)