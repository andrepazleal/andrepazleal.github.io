This is my personal github page where I have few personal projects, you can check them below.

# Captivate Course Automation (2014)

The purpose of this script is to automate the creation of a course UI inside Adobe Captivate, using standard elements for panels, navigation buttons, sound on off, text position (dependind the position of the image), image styles, list, tables, h1, font and all styles, the idea behind this is to present the texts to the user using the Slide Notes imported thru the the accessibility panel and there only use HTML formatting texts. 

Here are the steps to use the script:  
• Open Adobe Captivate (8 or 9);  
• Create some slides;  
• On the tab properties the submenu Actions create a On Enter "Execute Javascript" click on Script_Window button and paste:

    
    $('head').append('<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js"></script>');
    $('head').append('<script src="https://andrepazleal.github.io/courseScriptTR.js"</script>');
    
[![javaScriptDriving.png](https://s12.postimg.org/p9m33h3t9/java_Script_Driving.png)](https://postimg.org/image/3zygsmnih/)   

Here's a brief explanation of the automation:

[![pastedImage_16.png](https://s2.postimg.org/llab1a7op/pasted_Image_16.png)](https://postimg.org/image/j3yju0ns5/)

1 - Topic name it´s imported from the slide label;  
2 - Course logo it´s set in the project name on the project information, all the logos are on the server and are loaded dynamic;  
3 - Initial interaction is automatically created;  
4 - Company logo it´s set thru the Company name on the project information;   
5 - The background motion graphic it´s loaded according to the topic, on intro topics like a welcome topic we have a longer motion graphic introducing the company logo and a different animation with an engaging sound.  

The slides content:

[![pastedImage_0.png](https://s22.postimg.org/6xelzy3wh/pasted_Image_0.png)](https://postimg.org/image/tm3szila5/)

1 - Slide notes, typed straight on the specific field in Adobe Captivate, when those notes are imported as accessibility notes they are used to explain the content of the current slide, the formatting is done using HTML tags, beside, the information panel automatic check where the interaction is, moving it´s position up and down so that the user can go thru every slide.  
2 - Email button, from the slide the user can send an email to the email set on the project information window;  
3 - Sound button, control the topic sound;  
4 - Panel button, hide or show the information panel;  
5 - Slide information field, shows the user what slide he is and how many slides are left, for the content in development is created a range element making the navigation between the slides easier;  
6 - Language button, as you notice on slide notes image below, on Adobe Captivate there´s the option to create more than one slide note, enabling the training assistant to translate the content on English and Spanish, beside if the user choose one of the languages all the initial, end messages and course interface are displayed on the language chosen.  
7 - One of the most important concepts of eLearning courses, the navigation arrows;   
8 - Software images, copied straight from a WMWare to create the slide sequence, simple as, Print Screen on VMWare and Ctrl+V on Adobe Captivate.   



Remember a few things, create 3 or more slides to test the content, why:

• First slide it loads the script and the video intro;  
• Second slide, after pressing the arrow, loads the UI, the content of the slide.   
• Third slide or last slide, display the end message of the topic.  

Things I want to change in the future:  

• Create a interface to load the company logotype, course logotype, themes, 3d characters;   
• Remove all the links to Tweenlite and remove the library, stay only with CSS;   
• The themes will include a set of different animations for the elements, elements like lists will have a custom bullet, etc.  
• Create more "poses" for the 3d character.  

You can see a test package with the script on this link, you can see it on a mobile device as well:

[Click here](https://andrepazleal.github.io/courses/demo/)

# Agenda Escolar (2017)

The intention is to create an app out of this, let's see it how will end up, haha.

You can access that content here:

[Click here](https://andrepazleal.github.io/cac)

# CtrlMe (2011)

Those are the final files of my term paper for college. Created an app using JS/CSS and published thru Phonegap to present an app that control the diet and nutrition of the user, giving the ability to add new meals according to the BMI of the user.
This was my first experience creating something for HTML5 before that only knew actionscript, it was an awesome experience and most of all lead to complete college.

You can access that content here:

[Click here](https://andrepazleal.github.io/CtrlMe)

# 3d Animations (2008)

This is some old stuff a few motions that I've created with Blender 3d. 

[![Screen Shot 2017-05-06 at 03.32.32.png](https://s24.postimg.org/ruhietdit/Screen_Shot_2017-05-06_at_03.32.32.png)](https://www.youtube.com/watch?v=NXK30Yyv9bg)

[Click here](https://www.youtube.com/user/andrepazleal)
