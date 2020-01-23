# vueiostest

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### for IoS Xcode build
```
npx cap add ios
```
- note if it complains about missing cocoapods

```
sudo gem install cocoapods
```

- npx cap open ios
- then in xcode, hit play button to run simulator
- to push changes and sync up the xcode

```
npm run build; npx cap sync
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
