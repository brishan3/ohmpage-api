
# Ohmpage API

A Node/Express backend built for the Ohmpage React App, a customizable homepage application for your browser.

Ohmpage React App Repository:
https://github.com/brishan3/ohmpage-client


## Run Locally

Clone the project

```bash
  git clone https://github.com/brishan3/ohmpage-api.git
```

Go to the project directory

```bash
  cd ohmpage-api
```

Install dependencies

```bash
  npm install
```
You will need a MySQL database set up to run locally, so make sure to create a new schema, match your database credentials in the knexfile.js 'development' section, then run:

```bash
  npm run migrate
```

followed by:
```bash
  npm run seed
```

Start the server by running:

```bash
  npm run start
```
or 
```bash
  npm run dev
```

## API Reference

#### Get all available links

```http
  GET /links
```
Returns an array of objects.
| Parameter     | Type     | Description                      |
| :------------ | :------- | :------------------------------- |
| `id`          | `INT`    | Incremented ID for each link     |
| `title`       | `STRING` | Name of the website              |
| `description` | `STRING` | Brief description of the website |
| `url`         | `STRING` | URL to the website               |
| `category`    | `STRING` | Main category website falls into |
| `subcategory` | `STRING` | Subcategory website falls into   |

#### Get backgrounds

```http
  GET /backgrounds
```
Returns an array of objects.
| Parameter   | Type     | Description                                         |
| :---------- | :------- | :-------------------------------------------------- |
| `id`        | `INT`    | Incremented ID for each image                       |
| `title`     | `STRING` | Name for background image                           |
| `thumbnail` | `STRING` | File name for compressed thumbnail image in /public |
| `file`      | `STRING` | File name for full resolution image in /public      |