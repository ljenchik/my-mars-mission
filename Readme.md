# My Mars Mission

## My Mars Mission is a website for teenagers about Mars. 

I wanted to create not only engaging website but also apply my new skills (TypeScript, React and Node.js) to a real project.

In TechSwitch coding bootcamp my favourite exercise was Mars Mission. As a team of seven we had to create an educational website about Mars for teenagers. The task was exciting and provided a great opportunity to apply everything we had learnt before. We created a project from scratch: planned, designed and presented it in front of other software developers. We built a React frontend application and learnt how to implement components. I was impressed with the development process, team work and the results we achieved. 

After completing the course I decide to work on My Mars Mission project on my own to practice and add new features and functionality. In the frontend, I added media queries, styling, new pages such as login, create account, tickets to Mars and so on. I used Postgres for the backend to store users' and Mars tickets' details. I learnt how to store and safely change passwords using bcrypt technology. Also, I improved my CSS skills. 

## Installation


## Usage

### Landing Page

Home page of My Mars Mission website is called a Landing Page. It contains Mars image, three buttons-links: Mars Holidays, Mars Rover Images, Learning Space, a burger menu for smaller screens and a navbar for bigger screens as well as a link in a form of astronaut icon. When a user hovers over the links the cursor changes to pointer and the colour of the text and the icons changes to white.

<p float="center">
<img src="assets/images/LandingPage_1.png" alt="landing page with a link changing colour to white" width="200"/>
</p>

At the top left corner there is an astronaut icon which links to create account and login page. To browse the website the user doesn't need to login but in order to book a ticket to Mars or see all booked tickets a user has to create account and login.

At the top right corner there is a hamburger menu. When clicked, it displays a list of links to a Landing Page, a Learning Space, Mars Holidays and Mars Rover Images. Next to the links there are small icons which symbolise each page. The links and the icons change the colour to white when cursor hovers over. The cross icon at the top left corner of the opened hamburger menu is used to close the menu. Alternatively, the user can click on a black background and close the menu.
<p float="center">
<img src="assets/images/LandingPage_2.png" alt="landing page with a hamburger menu opened" width="200"/>
</p>
For bigger screens, instead of the hamburger menu, a user can use a navbar. The navbar displays the same links and the corresponding icons as the hamburger menu. The cursor changes to the pointer and an orange line appears underneath to make the link more visible while hovering over.
<p float="center">
<img src="assets/images/LandingPage_3.png" alt="landing page with a navbar for bigger screens" width="200"/>
</p>

### Learning Space

Learning Space page exhibits a multiple choice quiz about Mars. The page consists of five sections: a question title and a corresponding image, an information about Mars, a quiz question, based on the provided information, three answers, one of which is correct, and previous/next buttons with a text between them to display a question number.

When user clicks on a correct answer, the border of the answer turns green, and if the answer is wrong the border changes to red. A user can navigate from a question to question without choosing the answer.

<p float="center">
<img src="assets/images/LearningSpace_1.png" alt="learning space with a correct answer highlighted in green" width="200"/>
<img src="assets/images/LearningSpace_2.png" alt="learning space with a wrong answer highlighted in red" width="200"/>
</p>

At the moment there are only 3 questions in the quiz. I hope to add more questions later. Also, I want to display the number of user's correct answers. And add another page with a prompt such as "Do you want to learn something new about Mars? Start a quiz" as well as add Finish quiz button (when clicked the score would be displayed).

### Mars Rover Images

Mars Rover Images page displays the photographs taken by Perseverance Rover on Mars. The first available image was dated of 18 February 2021. That's why this date is shown at the date-picker field. To get the images I used the NASA Open Api. 
<p float="left">
<img src="assets/images/MarsImages_1.png" alt="mars images taken on 18/02/2021" width="200"/>
</p>

When open this page, a user sees a carousel of the twenty images with the first hero image at the center. The images are not the same every time. I shuffle all the images taken at the specific date and display the first twenty.

A user can select any date from a date-picker box. If there are no images taken on the chosen date, a message "There were no photographs taken on this date. Please choose another date" will be displayed along with a Mars image from a Landing Page underneath.

<p float="left">
<img src="assets/images/MarsImages_2.png" alt="mars images" width="200"/>
<img src="assets/images/MarsImages_3.png" alt="no mars images taken on this date" width="200"/>
</p>

For smaller screens a list of thumb images is located under the hero image, in contrast to bigger screens, where thumb images are located at the bottom of the hero image.

### Mars Holidays

In order to explore a Mars Holidays page a user has to create an account: to provide name, email, photo (optional) and password. I validate an input details. If there is no name, "Enter name" message will be displayed as well as the corresponding label Name and input box will be highlighted in orange. Password must contain at least 8 characters with one num er and one letter. If password is not in a correct format, a user will see a message with error.
Afrer a successful account details validation, a user will land in a login page.

<p float="left">
<img src="assets/images/MarsHolidays.png" alt="mars holidays page" width="200"/>
<img src="assets/images/CreateAccount_1.png" alt="create account form" width="200"/>
<img src="assets/images/CreateAccount_2.png" alt="create account form with a missing Name label" width="200"/>
<img src="assets/images/CreateAccount_3.png" alt="create account form with an incorrect password" width="200"/>
<img src="assets/images/LoginPage.png" alt="login page" width="200"/>
</p>

Afterwards, a user will be shown a page where he/she is able to book a ticket to Mars, view all booked tickets if there are any, and by clicking on profile image or a photo (in case it was provided) to see and update account details, add photo and change password.

Let's explore a book ticket option first. Once again, I validate all information provided by a user, and in case of any issue, error message will be displayed.

<p float="left">
    <img src="assets/images/CreateTicketForm_1.png" alt="empty create ticket form" width="200"/>
    <img src="assets/images/CreateTicketForm_2.png" alt="create ticket form with an error" width="200"/>
    <img src="assets/images/CreateTicketForm_3.png" alt="filled in create ticket form" width="200"/>
</p>

After pressing a submit button, a user will be shown his/her ticket.

<p float="left">
    <img src="assets/images/TicketSmallScreens.png" alt="ticket for smaller screens" width="200"/>
   <img src="assets/images/TicketBigScreens.png" alt="ticket for bigger screens" width="200"/>
</p>





