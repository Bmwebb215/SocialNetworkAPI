
# Social Network API

## Description

This Social Network API is a backend application designed for social media startups. It uses Express.js for routing, MongoDB as the database, and Mongoose ODM for data modeling. The API supports creating users, adding friends, posting thoughts, and reacting to thoughts.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [API Routes](#api-routes)
- [Video](#demo-video)

## Installation

```bash
git clone git@github.com:Bmwebb215/SocialNetworkAPI.git
cd SocialNetworkAPI
npm install
```

## Usage
Start the server:

```bash

npm start
```

Use Insomnia to interact with the API.

## Features
User management: Create, update, and delete users.
Friend system: Add and remove friends.
Thoughts and reactions: Users can post thoughts and react to them.

## API Routes
# Users
GET /api/users: Fetch all users.
POST /api/users: Create a new user.
GET /api/users/:userId: Fetch a single user by ID.


## Thoughts
GET /api/thoughts: Fetch all thoughts.
POST /api/thoughts: Create a new thought.
GET /api/thoughts/:thoughtId: Fetch a single thought by ID.

# Reactions
POST /api/thoughts/:thoughtId/reactions: Add a reaction to a thought.
DELETE /api/thoughts/:thoughtId/reactions/:reactionId: Remove a reaction from a thought.



## Demo Video
[video](https://drive.google.com/file/d/1syROdTYBkHRII3Wdq22vyqB0phgYASms/view)