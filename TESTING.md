# **Know It**

**[:leftwards_arrow_with_hook: *README.md*](README.md)**

#### Visit the live Website : **[WEBSITE NAME](WEBSITE LINK)**.

# Testing

## Table of Content : 

* [Code Validation](#Code-Validation)
  * [W3C](#W3C)
  * [JSHint](#JSHint)
* [Lighthouse](#Lighthouse)
* [Cross Browsers Testing](#Cross-Browsers-Testing)
  * [Manual Testing](#Manual-Testing)
* [User Stories Testing from UX section of the README.md](#User-Stories-Testing-from-UX-section-of-the-README.md)
  * [First Time User](#First-Time-User)
  * [Returning User](#Returning-User)
* [Further Testing](#Further-Testing)
* [Bugs](#Bugs)


## Code Validation

### W3C

W3C Markup Validation Service and W3C CSS Validation Service have been used to check all the pages of the website for semantic and syntax errors.
The results are positive and the code is valid.

* [W3C Markup Validation Service](https://validator.w3.org/)

![W3C HTML Validation Result](assets/images/TESTING-images/code-validation/html-validator.png)

* [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)

![W3C CSS Validation Result](assets/images/TESTING-images/code-validation/css-validator.png)

[**:back:** *Table of Content* ](#Table-of-Content)

### JSHint

[JSHint](https://jshint.com/) was used to validate the JavaScript code for semantic and syntax errors. No warnings or error were found.  
The results are positive and the code is valid.

## Lighthouse

[Lighthouse](https://developers.google.com/web/tools/lighthouse/?utm_source=devtools) is a tool provided by Google Chrome DevTools and allows to identify the site performance, accessibility and user experience on Mobile and Desktop.  
All the pages from the website have been tested with Lighthouse.  
They all show 100% score except for the performance for most pages.

* Home
  * ![Mobile](assets/images/TESTING-images/lighthouse/lighthouse-mobile-home.png)
  * ![Desktop](assets/images/TESTING-images/lighthouse/lighthouse-desktop-home.png)
* About
  * ![Mobile](assets/images/TESTING-images/lighthouse/lighthouse-mobile-about.png)
  * ![Desktop](assets/images/TESTING-images/lighthouse/lighthouse-desktop-about.png)
* Study
  * ![Mobile](assets/images/TESTING-images/lighthouse/lighthouse-mobile-study.png)
  * ![Desktop](assets/images/TESTING-images/lighthouse/lighthouse-desktop-study.png)
* Play
  * ![Mobile](assets/images/TESTING-images/lighthouse/lighthouse-mobile-play.png)
  * ![Desktop](assets/images/TESTING-images/lighthouse/lighthouse-desktop-play.png)
* Contact
  * ![Mobile](assets/images/TESTING-images/lighthouse/lighthouse-mobile-contact.png)
  * ![Desktop](assets/images/TESTING-images/lighthouse/lighthouse-desktop-contact.png)
* 404
  * ![Mobile](assets/images/TESTING-images/lighthouse/lighthouse-mobile-error.png)
  * ![Desktop](assets/images/TESTING-images/lighthouse/lighthouse-desktop-error.png)

[**:back:** *Table of Content* ](#Table-of-Content)

## Cross Browsers Testing

The website was tested on severals browsers ( Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, Opera) 
and shows good functionality across them all.  
Manual testing was executed on **all browsers** as shown in the following section.

### Manual Testing

The responsiveness of the website for different viewport sizes was tested by dragging the window up, down, 
left and right.  
The following tests have been executed severals times at different viewport breakpoints.

"ALL THE FOLLOWING TESTING IS LEFT FOR DEMONSTRATION AND EXAMPLE PURPOSES BUT NEED TO BE CHANGED AND ADAPTED TO THE PROJECT"

* Header
    * Click on ```"PAGE NAME"``` navigation link, and check if the link works, when hovered and stays highlighted while on 
    the page on medium and larger screens.
    * Click on ```"PAGE NAME"``` navigation link, and check if the link works, when hovered and stays highlighted while on 
    the page on medium and larger screens.
    * Click on ```"PAGE NAME"``` navigation link, and check if the link works, when hovered and stays highlighted while on 
    the page on medium and larger screens.
    * Click on ```"PAGE NAME"``` navigation link, and check if the link works, when hovered and stays highlighted while on 
    the page on medium and larger screens.
    * Click on ```"PAGE NAME"``` navigation link, and check if the link works, when hovered and stays highlighted while on 
    the page on medium and larger screens.
    * Click on ```the logo```, and check if the link works on all screens sizes.

    * The toggle menu's links on small screens have been tested as well.  

* Footer
    * Click on ```"BUTTON NAME"``` navigation link (button), and check if the link works, when hovered as well.
    * Click on ```the Facebook icon``` link and check if the link works, when hovered and opens in a different tab.
    * Click on ```the Instagram icon``` link and check if the link works, when hovered and opens in a different tab.
    * Click on ```the Pinterest icon``` link and check if the link works, when hovered and opens in a different tab.

* Home 
    * Click on ```About Us``` navigation link (button), and check if the link works, when hovered as well.

* "PAGE NAME"
    * Not applicable.

* "PAGE NAME"
    * Not applicable.

* "PAGE NAME"
    * Click on the arrows to change slides.
    * Click on the images and check if the modal appear with the corresponding information.
    * Click on the closing button of the modal to close it.
    * Click outside of the modal window to close it.

* "PAGE NAME"
    * Click on the download icons beside the titles and check if the link opens a pdf file in a different tab.
    * Click on the icons (links) at the end of every tips and check if the links work and open in a different tab.

* "PAGE NAME"
    * Try to submit the form without filling the :
        * Full Name input and check if the form is valid and that an error message appears.
        * Email input and check if the form is valid and that an error message appears.
        * Phone input and check if the form is valid and that an error message appears.
        * Date of Birth input and check if the form is valid and that an error message appears.
        * Home Address input and check if the form is valid and that an error message appears.
        * About You input and check if the form is valid and that an error message appears.
    * Try to submit the form given incorrect input for :
        * Email and check if the form is valid and that an error message appears.
        * Phone and check if the form is valid and that an error message appears.

[**:back:** *Table of Content* ](#Table-of-Content)

## User Stories Testing from UX section of the README.md

### First Time User ====> THIS TESTING PART HAVE TO BE CHANGED ADAPTED TO THE UX OF THE PROJECT

1. As a first time user, I want the website to be appealing.
    * The website uses clean and spacious design.
    * The website applies all the accessibility protocols for an easy and good user experience for all. ===> PROOF OF ACCESSIBILITY FROM OTHER SOURCES !?

![home](assets/images/README-images/ami-responsive-home.png)
!["PAGE NAME"](assets/images/README-images/ami-responsive-"PAGE NAME".png)
!["PAGE NAME"](assets/images/README-images/ami-responsive-"PAGE NAME".png)
!["PAGE NAME"](assets/images/README-images/ami-responsive-"PAGE NAME".png)
!["PAGE NAME" Tips](assets/images/README-images/ami-responsive-"PAGE NAME".png)
!["PAGE NAME"](assets/images/README-images/ami-responsive-"PAGE NAME".png)

See [Lighthouse](https://github.com/Tom-Nagy/walking-around/blob/master/TESTING.md#Lighthouse) for accessibility results.

2. As a first time user, I want the navigation to be easy and intuitive.
    * The header and the footer are fixed respectively on the top and on the bottom of the page and always 
    accessible. So it is easy and quick to navigate.
    * The navigation menu is clear.
    * The current page is highlighted on medium and large screens to provide feedback location information to the user.

![Navigation](assets/images/TESTING-images/manual-testing/testing-nav.png)

    * The current page replace the website name beside the logo on small screens to provide feedback location information to the user.

![Navigation-sm](assets/images/TESTING-images/manual-testing/testing-nav-sm.png)

3. As a first time user, I want the content to be informative but not overwhelming.
    * The content is displayed per readable and short sections to provide the feeling that it is approachable and 
    not complicated. This is supported by the website design.
    
4. As a first time user, I want to understand immediately what is the website about without the need 
of looking for it.
    * The home page provide all the information that a new user need :
        * The heading gives the main information: "Ireland Best Walking Community" which includes location, 
        and what it is about.

![Home Heading](assets/images/TESTING-images/manual-testing/home-heading.png)

        * Three paragraphs give extra information about the community spirit and goals.

![Home Headlines](assets/images/TESTING-images/manual-testing/home-headlines.png)


5. As a first time user, I want to be able to apply for joining the Club.
    * In the footer a button/link ```Join Us !``` is always visible and accessible.
    * The form gives information (on the top) on what to except. After filling up the form, someone will contact 
    the user.
    * Additional information is given in the "About Us" section of The Club page on how to join.

### Returning User

6. As a returning user, I want to see when and where are the Club's meetings.
    * Club's meeting policy is explained in the "Meet up" section of the Activities page. 

7. As a returning user, I want to check out the different social media links for inspiration and ideas.
    * Relevant social media links are provided in the fixed footer and always accessible.

8. As a returning user, I want to get information about hiking.
    * A page is dedicated to Hiking Tips which include three main tips.
    * Each tip is downloadable in a pdf format.
    * Additional information is available at the bottom of each tip's section in a form of a link to external 
    websites.

[**:back:** *Table of Content* ](#Table-of-Content)

## Further Testing

* The website has been tested by fellow students, slack community, friends and family.
* All the issues raised have been addressed.

# Bugs

INCLUDE A BUGS SECTIONS IN RELATION TO TESTING AND NOT DEVELOPMENT !?

[**:back:** *Table of Content* ](#Table-of-Content)