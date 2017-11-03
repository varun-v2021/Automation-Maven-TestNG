Following steps allows user to launch Selenium (Chrome browser for exeample) from jenkins

1. Make sure Jenkins has Maven, Git, SSH, HTTP, TestNG and associated Plugins installed
2. Set the global parameters JAVA_HOME and MAVEN_HOME in Jenkins -> Manage Jenkins -> Global Tool Configuration
3.From Command line as admin, Goto jenkins directory D:/Jenkins and execute: java -jar jenkins.war
4.http://localhost:8080/user/varun/configure
5.Goto "Show API Token" and obtain for example varun:743ad88ff292282c106e38fb632b0b4b
6.(either Cygwin or Git bash, goto D:/Jenkins) wget -q --auth-no-challenge --user varun --password admin --output-document - 'http://localhost:8080/crumbIssuer/api/xml?xpath=concat(//crumbRequestField,":",//crumb)'
7.obtain the id for example "Jenkins-Crumb:12ed997c589b3bf15dae9b616bf2bf0f"
8.(either Cygwin or Git bash goto D:/Jenkins and execute) curl -I -X POST http://varun:743ad88ff292282c106e38fb632b0b4b@localhost:8080/job/CucumberSelenium-Sample/build -H "Jenkins-Crumb:12ed997c589b3bf15dae9b616bf2bf0f"

Reference:
http://www.inanzzz.com/index.php/post/jnrg/running-jenkins-build-via-command-line