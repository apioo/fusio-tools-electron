# Fusio electron app

This is a simple electron app around the Fusio backend app. You can use this
app to connect to a Fusio system, this is useful in case you can not host the
backend app on a server.

## Configuration

Before you start the app you have to set the correct Fusio endpoint url. 
The app connects then to this Fusio instance. Therefor open the file 
`index.html` and change the `var url` to the absolute url of your Fusio 
installation. By default we connect to the Fusio demo API.

## Installation

To start the electron app you can simply run the following commands:

```
npm install
npm run start
```

## Build

It is also possible to build a self executable app. Where `platform` must 
be one of `darwin`, `linux`, `mas` or `win32`.

```
npm run build [platform]
```
