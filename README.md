# TestCafe intro

This repo has various test cass scenarios
- A basic test case on http://devexpress.github.io/testcafe/example
- Code of various basic actions required during a test case on http://devexpress.github.io/testcafe/example
- Testing and extracting text from https://www.google.co.in/advanced_search
- Testing a Login page with 2 different screens https://the-internet.herokuapp.com/login
- Added page object model on http://devexpress.github.io/testcafe/example to make code reusable


Clone the repo -
```
git clone https://github.com/AdityaPrakash2811/testcafe_intro
```

Run -
```
npm install
```
In actions.js file uncomment the required block 

To run test cases - 
```
testcafe chrome <required_folder>/<name of file>.js
```

require folder in between tests folder or page_model folder

To take screenshot in action.js file -
```
testcafe chrome tests/actions.js -s screenshots
```
> Page object model implemntation's idea is taken from the official docs but here all the features are covered