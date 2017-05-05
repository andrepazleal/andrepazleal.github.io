This is my personal github page where I have few personal projects, you can check them below.

# Captivate Course Automation (2016)

The purpose of this script is to automate the creation of a course UI inside Adobe Captivate, using standard elements for panels, navigation buttons, sound on off, text position (dependind the position of the image), image styles, list, tables, h1, font and all styles, the idea behind this is to present the texts to the user using the Slide Notes imported thru the the accessibility panel and there only use HTML formatting texts. 

Here are the steps to use the script:<br>
• Open Adobe Captivate (8 or 9);<br>
• Create a Slide;<br>
• On the tab properties the submenu Actions create a On Enter "Execute Javascript" click on Script_Window button and paste:

    
    $('head').append('<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js"></script>');
    $('head').append('<script src="https://andrepazleal.github.io/courseScriptTR.js"</script>');


Remember a few things, create 3 or more white slides and change the slide duration for more than the standard 3sec, why:

• First slide it loads the script and the video intro;<br>
• Second slide, after pressing the arrow, loads the UX, the content of the slide, the text for the user, must be inserted on the Slide Accesibility panel, the button on the right side of the Slide Label Name.<br>
• Third slide or last slide, display the end message of the topic.

Things I want to change in the future:

• Create a interface to load the company logotype, course logotype, themes, 3d characters;<br>
• Remove all the links to Tweenlite and remove the library, stay only with CSS;<br>
• The themes will include a set of different animations for the elements, elements like lists will have a custom bullet, etc.<br>
• Create more "poses" for the 3d character.

You can see a test package with the script on this link, you can see it on a mobile device as well:

[Click here](https://andrepazleal.github.io/courses/demo/)

# Agenda Escolar (2015)

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

[![ScreenShot](https://raw.github.com/GabLeRoux/WebMole/master/ressources/WebMole_Youtube_Video.png)](https://www.youtube.com/watch?v=NXK30Yyv9bg)

[Click here](https://www.youtube.com/user/andrepazleal)
