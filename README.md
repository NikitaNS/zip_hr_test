# ZipHRTest mobile application

## Getting started

- Follow the procedure on https://facebook.github.io/react-native/docs/getting-started
    - Use `React Native CLI Quickstart` procedures for macOS
    - Setup for iOS and Android
- Clone this repo `git clone git@github.com:NikitaNS/zip_hr_test.git` then `cd test`
- Install dependencies `yarn`
- Install pods `cd ios && pod deintegrate && pod install && cd ..`

## Get access to news 

To get news list, you'll need to add 2 keys in your env file:

```
BASE_URL=https://api.nytimes.com/svc/topstories/v2/
APP_KEY= your_app_key
```

APP_KEY value is different per build variant. To create your own, you need to go throw this documentation: https://developer.nytimes.com/get-started


🎉
