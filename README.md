# Handlebar

[![](https://github.com/jsjohn026/Handlebar/blob/master/app/assets/images/header-icon-192x192.png)](https://github.com/jsjohn026/Handlebar/blob/master/app/assets/images/header-icon-192x192.png)

Handlebar is a web-based application where you review, purchase, and sell goods in an online marketplace.

## Background and Overview

Users can post and purchase items for sale, review products and sellers, manage orders and items.

## Functionality & MVP

   - [ ] User Auth
   - [ ] Goods and Genres
   - [ ] Shopping Basket
   - [ ] Beef/Props & Ratings
   - [ ] searchbar
   

#### Bonus Features

   - [ ] ratings
   - [ ] suggested purchases

## Technologies & Technical Challenges

##### Backend

-   MongoDB
-   Express
-   GraphQL
-   AWS

Cluster
Node Image

##### Frontend

-   React.js
-   Apollo

-   Docker
-   Heroku


## Group Members & Work Breakdown

### **Gordy Cooper**

### **Jasmine John**

### **David Suon**

### GIT Workflow
  - after a merged pull request or before creating one...
  - in your local repository...
    - git pull origin <feature_branch>
    - resolve any merge conflicts
    - commit changes
    - git push <feature_branch>

## June 21 - July 1

### Day 1 (Friday)
  - MongoDB database setup - **all**
  - Setup project skeleton - **all**
  - Docker configuration - **all**


### Day 2 (Monday)
  - User Auth
    - Backend - **David**
    - Frontend - **Gordy**
  - Splash & NavBar - **Jasmine & friends**


### Day 3
  - Goods & Genres


### Day 4
  - Shopping Basket


### Day 5
  - Beef/Props & Ratings


### Day 6 (Friday)
  - SearchBar
  - Production Readme
  - Heroku Deploy


### Day 7 (Monday)
  - Present


Overview
----------------------------------------------------------

[Live Demo](https://Handlebar.herokuapp.com)

### Introduction

Handlebar is a single-page clone of AirBnb. Users can search from a selection of listed homes to stay based on location and the number of guests they are traveling with.

[![alt text](https://github.com/jsjohn026/Handlebar/blob/master/app/assets/images/Handlebar_landing_page.png "Session Modal")](https://github.com/jsjohn026/Handlebar/blob/master/app/assets/images/Handlebar_landing_page.png)


Pages
----------------------------------------------------

### Session Modal (Log in or Sign up)

[![alt text](https://github.com/jsjohn026/Handlebar/blob/master/app/assets/images/modal.png "Landing Page")](https://github.com/jsjohn026/Handlebar/blob/master/app/assets/images/modal.png)

Users can view much of the site content without signing up, specifically listing information. They will be asked to log in or sign up once they try to book a listing. The modal allows users to switch between the log in or sign up form with having to load a separate page. 


### Navigation Bar

[![alt text](https://github.com/jsjohn026/Handlebar/blob/master/app/assets/images/navbar.png "Navigation Bar")](https://github.com/jsjohn026/Handlebar/blob/master/app/assets/images/navbar.png)

Users can access multiple pages from one navigation bar located at the top of the page. The options on this bar change once a user is logged in. The navigation bar is accessible as users scroll down the page or go to another link within the application. 

Future Direction
----------------------------------------------------------

### Product(Goods) Detail Page

The Goods detail page will have the following sections:

-   Search Bar: Users search listings directly on the Navigation Bar by location.
-   Photo Grid: Shows at least 5 photos of the listing. Images will be enlarged upon a mouse click and users will be able to slide through the multiple photos.
-   Product Details: A description, included amenitities list, and a calendar indicating available dates will be housed here. Host information, listed reviews, information on nearby attractions will be added.