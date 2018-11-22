# README file  
# CodeLou_FrontEnd 
# Teresa Balistreri

====================================
## DESCRIPTION =====================
====================================

This project is a blog called Virtuous Weeds. It acknowledges the value of people (including self), other creatures and things that are often uncelebrated, unacknowledged, and overlooked. The blog includes stories, linked articles and videos. It invites readers to share their own related stories. 

The purpose of the project is to inspire the exploration and celebration of the beauty, gifts and value of self and others in all their uniqueness as well as in their similarities.

I wanted the pages to be fun to look at and to bring a smile to the reader. So I tried to use surprising colors (though hopefully color schemes that work), combinations that shine (warning: reader is advised to put on protective sunglasses before opening the "universe" page) and I wanted to do a bit of animation.

Some of the project was lost/broken at the "eleventh hour". The backup submitted was a work in progress and in between scrapped and new ideas for layout. But it provides the basic framework for the project.

The home page navigation bar includes a main horizontal menu and a dropdown menu listing stories that link to or will link to story pages. Small screen modes provide scaled text, images and headers as well as sticky navigation bars on scroll for better viewing.

A sample of animated content is the group of "3D cards" at the bottom of the "No Worries"/Universe page. This page can be linked to through the "stories" dropdown menu. It is the first story in the list. ("No Worries! We are monkeys, stardust, spirit, golden!")

The card fronts advertise related content. On hover the card turns to display the back of the card with hyperlink to the content.

====================================
## CUSTOM CSS CLASSES ==============
====================================

I have created three css files.

     1. styles.css (the main css file)
     2. dropdown.css (rules for the dropdown menu)
     3. threeD-cards.css (rules for the 3D cards)

  There are 119 rules in styles.css
  There are 12 rules in dropdown.css
  There are 18 rules in threeD-cards.css

  In general they address coloring, sizing, padding, margins, backgrounds, displaying, positioning, transitioning, transforming, z-index, and font definitions.

====================================
## Custom JavaScript Functions =====
====================================

The javascript function I created is: 

1. checkNavPos()

.. This function is called on scroll and on window resize. If viewport size is smaller than 750px, if navigation bar has been scrolled to the top of the page, and if it was not already stuck to page top, the class ".sticky" will be added to the navigation bar and a variable will be updated to store the current state of the navbar (sticky or not). If the viewport size is 750px or greater and the "sticky variable toggle" shows navbar is sticky, the sticky class will be removed. 

Note: I'm seeing that had not yet added the variable to track sticky state back when I saved ther version of the project I have submitted. 

====================================
## To ViewTthe Project =============
====================================

     -- go to the github project directory: github.com/taleigh7/virtuous-weeds.git
     -- download the project files
     -- extract the files
     -- open the extracted index.html
     -- hover or click the "stories" button in the navigation bar to open the related dropdown menu
     -- click the first item in the dropdown: "No Worries! We are monkeys, stardust, spirit, golden!"

  This will serve as the main project page at this point. This is also the page with the 3d cards at bottom.


======================================================================================================================

(First upload)

Okay. Here's the deal. 
I was just cleaning up the pages, lining things up and such, when things stopped working.
So my project is going to be a more limited one!
I was already in a hurry and now I don't know if I will make it.

I've pulled a previously saved version which isn't laid out well. 
My main project page will be a linked page of the index.html.
So open index.html.
Open the dropdown menu by hovering over "stories" in the main navbar at the top of the page.
Click on the first story, "No Worries, we are monkeys, we are stardust, we are golden!" 

	This name is making me laugh so hard under the circumstances that it is hard to type!

The site is a blog. Some features are:
--dropdown menu for stories list (but only "No Worries!" works now.)
--sticky navbar on scroll in mobile mode. THIS IS MY JAVASCRIPT.
--3D Cards at the bottom of the "No Worries!"... aka Universe page.
--Had planned to include form page and other animated features that included use of the random number function,
  but I got so tied up in doing and redoing the layout 
  (this I need work on! I have trouble making it look good at some widths)

  If I were doing the project over again, I would spend less time on general layout and more time on 
  the javaScript side. 


REGARDING FONTS:
The pages look terrible without using the google FONTS that I have downloaded and included in the project directory.
Risky perhaps. But should work.

NOTE: Sometimes you have to go through the index.html to the "No Worries!" page to get the fonts to work. 

It almost always works in Firefox. If it doesn't work in Chrome, switch back and forth 
between VW-home and Stories-"No Worries!"

REGARDING LINKS:
The stories links and extra content links that I added are not currently in this old version, 
and I  probably won't have time before 12 to put them back in.

REGARDING CLEAN MARKUP PAGES
I probably won't have time to clean them up again. I'll push the pages up first. If time I'll clean them up.

REGARDING REST:
Will add more to readme after.













