# My Stretch App
This full-stack web application is for tech professionals who work at a computer all day. It allows users to set a 5-minute timer for a stretch break at the top of each hour. Users can click on which body part they would like to focus on during their break, which will display a gif from an array of images randomly on click.


Link to project: https://www.yourstretchbreak.com/

Note: This web app is still under construction and may display errors when using the live link.



![display of homepage of my stretch app application showing a woman stretching on laptop view with caption "Take a 5 minute stretch break", 5 minute timer, and buttons for body parts neck, shoulders, hands, eyes](public/img/mystretchapp.png)<br><br>

![display of homepage in mobile view with html vscode open next to it](public/img/mobileview.png)
![display of homepage in mobile view with html vscode open next to it](https://res.cloudinary.com/dtamwfybo/image/upload/v1665518880/Untitled_design_3_qrni9s.gif)
<br><br>

![display of homepage in mobile view with html vscode open next to it](https://res.cloudinary.com/dtamwfybo/image/upload/v1665518366/wire1_cmlcju.png)

![display of homepage in mobile view with html vscode open next to it](https://res.cloudinary.com/dtamwfybo/image/upload/v1665518366/wire2_swux3k.png)






## How It's Made:
Tech used: HTML, CSS, JavaScript, Nodejs, Express, MongoDB

- HTML was used to create the skeleton of the webpage and add information, including alt text to images and buttons.
- Vanilla CSS was used to construct the style of the page, given a very simple format.

Javascript was used to add in functions for page elements including:

- Displaying a random gif from an array of images on click
- Starting a 5-minute countdown timer
- Stopping a timer once timer hit 0 seconds
- Resetting a timer while counting down from a set amount of seconds

NodeJS was used for all backend routes
-Create, Read, Update and Delete functions were created with information being sent to and pulled from MongoDB.

## Optimizations To be added:
- Backend functions including bringing timer and stretch function serverside
- Creating a database of images and gifs that include yoga poses categorized by body part to increase speed and efficiency
- Adding ability to add stretches to database for other users to try
- Adding a social feed
- Creating ability to upload comments without needing to upload photo
- Adding React
- Updating HTML for accessibility
- Simplifying functions for more efficiency



