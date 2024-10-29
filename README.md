# New Lantern Frontend Challenge

## Background

The New Lantern PACS consists of several components working together to provide a seamless workflow for Radiologists reading and dictating cases. For this challenge, there is a simplified frontend with three distinct pages: a homepage, a worklist, and a reporter.

- The **Home** page is the landing page for the New Lantern PACS.
- The **Worklist** is where Radiologists can view and manage their cases.
- The **Reporter** is where Radiologists can dictate their cases.

Radiologists will have **each of these pages open in separate tabs/windows** wtih a multi-monitor setup similar to the image below.

![radiologist workflow](./public/image.jpg)


## Problem

Radiologists often have a microphone connected to our app that allows them to dictate their cases in our reporter. The microphone has button toggling it on or off. This is represented by a simple on/off button on the reporter page.

The issue is Radiologists aren't always looking at the reporter page, yet they may want to know if their microphone is on or off. On the other pages, you can see a badge that will display the status of the microphone.

## Task

Open the reporter page in a new tab/window and the worklist/home page in another tab/window.

Figure out a way to communicate the status of the microphone button across separately opened tabs/windows.

You can any resource on the internet to help you with this task except for the following:

- You can't use any external libraries or packages.
- You may not use any AI to help you with this task.