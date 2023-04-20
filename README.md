# Image-pair broswer and visualiser
This is a responsive application that visualizes image pairs from multiple folders. The image pairs we refer to are two images with the same name but in different folders. Thee application allows users to select multiple folders, and it displays all the image pairs within those folders. To ensure the application's versatility, there is the option to add more than two folders.
### Purpose
The purpose of this software is to open images from multiple folders and visualise them. The images are of the same name and exist in different folders, maybe due to a series of image processing like segmentation, landmark or object detection, or upscaling. This tool would allow the user to visualise such images. 
### Project Scope
The system will consist of a software application that can run on Windows, macOS, and Linux. The application will be responsible for processing directories and images.
# Requirements
- Any Operating System (ie. MacOS X, Linux, Windows)
- NodeJS preinstalled
- Any IDE(ie. IntelliJ, Android Studio, VSCode etc)
- A little knowledge of ReactJS.
# Tech-Stacks
1.   ### Electron
     - Electron is a popular framework for building cross-platform desktop applications using web technologies such as HTML, CSS, and JavaScript.
     - Basically a framework that provides the runtime environment for the application.
     - Electron's versatility, flexibility, and ease of use make it a popular choice for developers seeking to create robust, cross-platform desktop applications.
2.   ### React.js
     - ReactJS is an open-source JavaScript library used for building user interfaces
     - ReactJS has a large ecosystem of libraries and tools that make it easy to build complex applications, such as Redux for state management and React Router for routing.
     - Context API
        - Context API is a feature in ReactJS that allows for the sharing of data between components without the need to pass props down the component tree manually. It provides a way to pass data through the component tree without having to rely on props at every level.
        - Context API is useful when dealing with data that needs to be accessed by multiple components across a component tree. It simplifies the process of passing data down the tree, making the code more organized and maintainable.
3.   ### Tailwind-CSS
     - Tailwind CSS is a popular utility-first CSS framework that allows developers to rapidly build responsive and customizable user interfaces. 
     - Tailwind CSS is highly customizable, allowing developers to easily modify the default design system and create their own custom utility classes.
     - The framework is lightweight and optimized for performance, with a focus on reducing the size of the final CSS file.

# Installation
- Setup [Visual Studio Code](https://code.visualstudio.com/)
- Install [Node Version Manager (NVM)](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/)
    - NVM allows you to install different versions of Node, and switch between these versions depending on the project that you're working on via the command line.
- Install Node version 14
    - Run the following commands to install node version 14:<br />
     ```nvm install 14```<br />
     ```nvm use 14```
- Install yarn
    - Macos/Linux
         - Open Terminal and connect to server using SSH.
         - Run the following command to install Yarn:<br />
         ```sudo npm install --global yarn```
         - Once the installation is completed, reopen Terminal and log in to SSH to enable the Yarn commands.
         - Verify the Yarn version to make sure it has been successfully installed by typing in the command below and pressing Enter:<br />
         ```yarn --version```
    - [Windows](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)
- Clone the repository
- Open the terminal
- Run this command to get into main/current directory <br />
``` cd CS258 ```
- In the terminal run the following command to install all the NodeJS dependencies <br /> 
  ```npm install```
- In the terminal then run the following command to run the project <br />
  ```nom run electron:serve```
# Collaborators
- [Abhinav Kumar](https://github.com/kr-200)
- [Khushi Agarwal](https://github.com/Khushi724)
- [Pilla Venkata Sekhar](https://github.com/PVSekhar1234)
- [Rohit Dhanotia](https://github.com/TechBot505)
- [Yatharth Gupta]()
