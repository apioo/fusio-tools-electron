# Fusio electron app

This is a simple electron app around the Fusio backend app. You can use this
app to connect to a Fusio system, this is useful in case you can not host the
backend app on a server.

## Configuration

Before you start the app you have to set the correct Fusio endpoint url. Open
the file `config.json` and adjust the key url to point to your Fusio url.
The app connects then to this Fusio instance. By default we connect to the Fusio
demo API.

## Installation

To start the electron app you can simply run the following commands:

```
npm install
npm run start
```
