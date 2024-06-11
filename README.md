
# Introduction
This is the documentation for the Shared Shopping List application. This application was developed as a project for the Aalto Web Software Development course (Project 1). The application allows users to create and manage shared shopping lists.

# Features
The Shared Shopping List application provides the following features:

Main Page: This page displays the total number of lists and products. It serves as an overview of the application.

Shopping Lists: On this page, users can view all the active shopping lists. They can create new lists, delete existing lists, and navigate to a specific list. From the specific list, they can return to the Shopping Lists page.

Shopping List: In this view, users can see all the products added to a specific shopping list. They have the ability to add new products, mark products as completed, and return to the Shopping Lists page.


# Architecture
The Shared Shopping List application follows a modular architecture. Here is an overview of the different components:

Main Class (app.js): This class acts as the entry point for the application. It receives requests and forwards them to the appropriate controller based on the URL path and command.

Controllers: The application has three controller classes, each responsible for a specific website. The controller classes handle the logic for modifying the .eta files.

Services: The controller classes interact with service classes to perform database operations and modify data as required.

Views: The .eta files in the views folder define the structure and layout of the different website pages.

The application is built by following the project instructions (walking-skeleton), which means that
    - The online location where the program runs is http://localhost:7777
    - It uses docker and deno to store and run the program.


# Getting Started
To run the Shared Shopping List application, follow these steps:

1. Ensure that you have Docker and Deno installed on your system.

2. Clone the application repository from the provided source.

3. Open a terminal or command prompt and navigate to the project directory.

4. Launch the application by typing the following command: docker compose up

5. The application will be accessible at http://localhost:7777.


Congratulations! You have successfully set up and launched the Shared Shopping List application.

