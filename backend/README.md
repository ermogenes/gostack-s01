# Backend

A lightweight REST API for creating projects. It stores in memory, without
persistence.

## To run

```
yarn dev
```

## Endpoint

```
http://localhost:3333
```

## Routes

* `GET /` to get a hello world message.
* `GET /projects` to list all projects.
  * `title` parameter to filter projects by title (in LIKE way).
* `POST /project/999` to update the project with id = 999.
  * `title` is the project's title.
  * `owner` is the project's owner.
* `PUT /projects` to create a project.
  * `title` is the project's title.
  * `owner` is the project's owner.
* `DELETE /project/999` to delete the project with id = 999.