# README
## Live Demo: [MESSAGES](https://ancient-cliffs-03132.herokuapp.com/) 

Messages is micro-blogging service that replicates the functionality of Twitter.  I built this app with another apprentice at Qwasar Silicon Valley.
   
Features include:  
* Custom user authentication using JSON Web Token (JWT) stored in the database  
<img width="582" alt="image" src="https://user-images.githubusercontent.com/32985125/116759656-b67a8180-a9c7-11eb-9490-314a7ef8f877.png">    

* Ability to post/delete 'tweets', comment on posted tweets, and 'like' or unlike posted tweets    
<img width="1158" alt="image" src="https://user-images.githubusercontent.com/32985125/116760105-ed9d6280-a9c8-11eb-9997-a007cbfa1ce1.png">    

* Ability to follow other users and see their tweets   
<img width="870" alt="image" src="https://user-images.githubusercontent.com/32985125/116760134-0279f600-a9c9-11eb-9e8a-131ab01952a8.png">    

* Ability to be followed by other users so they can see your tweets    
<img width="878" alt="image" src="https://user-images.githubusercontent.com/32985125/116760163-145b9900-a9c9-11eb-9902-cbdaa2d23f76.png">    

* Ability to 'retweet' a post from another user   
<img width="836" alt="image" src="https://user-images.githubusercontent.com/32985125/116760236-47059180-a9c9-11eb-8b4d-a08a2e44f34f.png">    

* Dynamic search of the user database    
<img width="334" alt="image" src="https://user-images.githubusercontent.com/32985125/116760282-6c929b00-a9c9-11eb-8bea-78e61ea129c8.png">    

* React front end - state management with Redux    
* `PostgreSQL` for data storage for Heroku deploy

My specific contributions include:  
* Create basic framework for the application using Rails and Create-React-App
* Implement database logic for User, including model for `followers` and `following` - see this [GIST](https://gist.github.com/arosenfeld2003/61f72efdee5e025b6b9991864bea030b) for details
* Implement logic to `like` and comment on tweets  
* Deploy app to Heroku
* Numerous bug fixes and minor tweaks to front-end

### TODO (time permitting):
* Write unit tests for all aspects of the application
* Refactor front end for enhanced UX/UI
* Refactor React Router logic
* Improve performance with fewer API calls to database

We used this project to understand how to marry React on the front-end with Rails on the back-end.  We also studied the structure of a relational database for allowing users to follow and be followed by other users (`Twitter Model`), and tweets to be retweeted. 
