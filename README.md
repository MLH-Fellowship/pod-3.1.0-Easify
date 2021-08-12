# Easify

## What it does
Easify is a smart chrome extension. This extension will help you smartly and drastically increase your personal productivity while surfing the internet while taking care of your health and well-being. It will act as your personal companion by keeping constant checks over your emotions, your posture and maintaining your productivity while browsing. When a user gets distracted it will politely remind the user that they are getting distracted. It suggests user remedies such as “take a break” or “have a cup of coffee” along with suggesting some music from their playlist or otherwise, based on the user's emotion. Users will also be given a choice to analyze his/her mood and number of distractions over time in order to retrospect their productivity and health. On the basis of screentime, it will also remind the user to take refreshment breaks to hydrate themselves.

## Objective
- Posture detection of the user and prompting if the posture is incorrect
- Suggesting memes/music to the user on basis of their emotions
- Suggesting Trending articles/repositories to users to cherish their knowledge
- On basis of screentime, reminding the user to take refreshment breaks

## Tech stack
- NodeJS
- EJS
- HTML
- CSS
- JavaScript
- ML5.js
- p5.js
- Python
- Pytorch
- OpenCV

## Run the application

1. Clone this repository by typing the following command in your terminal
```
git clone https://github.com/MLH-Fellowship/pod-3.1.0-Easify
```
2. Open Google Chrome and type in the address bar - 
```
chrome://extensions
```
3. From the right-hand side, enable the developer mode if you haven't already
4. From the left-hand side, select the option that says 'Load Unpacked'. 
5. Locate the client folder and select it.
6. An extension with an ID will appear, there can be some errors right now but don't worry we will resolve it in the later steps. 
7. Copy that ID and in a new tab write the following address:
```
chrome-extension://<extension_ID>/index.html
```
8. You will now be promted to give your camera permissions. Don't worry this is just to see your emotions and the classification is performed in your browser only. 
9. After you give the permission, you will be able to see the extension working!

## Target audience
- All developers
- Users with a high screentime
