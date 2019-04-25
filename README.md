
# TheComicLeague
Our Project idea is of a comic website, one in which you can select, view and rate your favourite comic books.

03/02/19
We initially came up with ideas on what we might doing our project on, we settling on doing a website based off a comic book store. The site would be allowed to view the details of the comics, the comics would be sorted by genre, categories, etc and have a random comic of the week would appear at the top of the page. The user would be able to subscribe to the website, allowing them to buy the comics. Once the comics are bought they are stored in the user's personal page which shows only comics that they have bought. The most popular comic of the month would also be shown to the user. The user would be allowed to comment and give reviews on comics, along with a rating system. The website would contain contact details. The user would also be able to customize the look of there profile to cater to their personal wants. The user would occasionally be given discount codes for purchases on the website.

11/02/2019
This week upon futher discussion we switched from a website to an Ionic Angular application. 
The reason for this decision is due to the lack of clint-server-database relationship in terms of storage. 
We will be asscessing Firebase as a cloud server database option this week and how we can implement it in our ComicLeague app.
We've decided not to have a purchase option for comics as we want to focus on the rating and reviewing aspect of the comics. The subscription to the site will allow access to all comics.

18/02/2019
After reviewing some Firebase tutorials (see wiki) we have settled and are ready to commence developing  the apps body . Firebase will allow us to work concurrently on the cloud ,we just have to connect between the app and firebase project. We are thinking of using Angular authentication for our log in so we will be watching some example tutorials (see wiki) for reference.
We intend to have a base design for the logo of the app complete this week. The logo will be designed using GIMP. 


25/02/19
After going through the Angular Authentifaction videos, we proceeded to get the Login and Register API connected to a database.  The database we decided to use for this part of the project was mongoDB.  We also finished up the look of the logo's design for the app trying to have a look that would suit multiple comicbook producers.  We decided onf finishing the login/register and having the home page set up for next week. 

04/03/19 The home page has been set up successfully. The Login/Signup server-side information was set up but began producing errors so this week those errors will be corrected. Signed up for firebase and created the database for the app. We set up MongoDB and the collection of users to store the user information.

11/03/19 We're looking for different comic book api's and came across a Marvel API online, so we'll try to use this api for our comics. This week will be spent looking at this Marvel API site and determining whether it's feasible or not. The wiki page on GitHub will be set up this week with commands and links associated with our project posted there. The server side of the Login/Signup was finished. We successfully set up the application to MongoDB.

18/03/19 This week we got the JSON for the Marvel API and pulled this JSON information into the firebase database. We have added bootstrap as the stylesheet and html output for our application. We also set up the paths for each page on our project and navigation between these pages. We have a working Login and Signup pages for our app, our plan is to now authentify these pages.

25/03/19 This week, we are working on creating the 'Your Personal' page, and having it so that the user can only access it if they are logged into the app. Looking how to design this page and how to store the user selected comics once the comic API is connected to the app. Once this is done we will be working on the design of the main page and how-to layout the comics visually for the user. We have not been successful in getting as much work as planned done because of other module project and assessments.

01/04/19 We have been successful in setting up an authentication guard on the 'Your Personal' page, so that the user must be logged in to view said page. To do this we have set up the AuthService and AuthGuard. We where also successful in setting up token verification for the user, giving each user a unique token. This was done using jsonwebtoken and using our TokenService. Navigation is set up sending the user to the 'Login Page' if they try to access the 'Your Personal' page while not logged in.

08/04/19 Firebase has been added to the project and can successfully connect to the database. The marvel api is proving quite difficult to implement into our angular project and is keeping us from doing other additional work on it. Additional work done on the logout and the navigation of the website this week. The API should ideally be connected and outputting the comics to the home page by the end of this week. Once this is done we plan on allowing the user to add desired comics into their own personal page. After we achieve this we plan on adding like/comment section for the user to rate each comic. We have also had a lot of other work to do for our other modules these coming weeks up to Easter which has not helped the situation

15/04/19 After weeks of discussing the Marvel API, drawing the information from it has proved to be a lot more complex than first anticipated. We have decided to manually implement the comics to our app as the marvel api was simply taking up too much time with little progress. As a result, we had to redo the way we were pulling the information from our firebase database. The scrollbar on our project also isn't working properly, not sure why this is the case as we have done this before, but we cannot seem to fix it.

22/04/19 Drawing the comics from the firebase database is proving a little more cumbersome then expected we nearly have it working however we still have a few errors arising. Not as much work was done and anticipated due to the fact we have another project due during the week. We will begin the star rating system for the comics this week which will allow the user to rate a comic, this rating should then be updated on the firebase database. However, due to time constraints we may change the rating system to a libary for comics the user has read.

24/04/19 We have concluded that the reason we have come into so much problem with the scrollbar (along with some other things) is the fact this application was started an Ionic App and then converted into an Angular one. This has seemed to have caused unforeseen errors. Unfortunately, we have recognized this issue too late and hope to finish the app to the best of our ability.
