# Easify

<div align="center">
  <img width="500" alt="easify" src="https://github.com/MLH-Fellowship/pod-3.1.0-Easify/blob/staging/client/assets/imgs/logo.png?raw=true">
</div>

## MLH Pre-Fellowship( Summer 2021)

> Eaisfy is a project made by MLH Fellows - Pod 3.1.0 Team-1 i.e. Team Easify

![MLH Fellowship](https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/challenge_photos/001/622/674/datas/full_width.png)

![Forks](https://img.shields.io/github/forks/MLH-Fellowship/pod-3.1.0-easify?style=social) ![Stars](https://img.shields.io/github/stars/MLH-Fellowship/pod-3.1.0-easify?style=social) ![Watchers](https://img.shields.io/github/watchers/MLH-Fellowship/pod-3.1.0-easify?style=social) ![Top Language](https://img.shields.io/github/languages/top/pod-3.1.0-easify/FellowStories) ![Languages](https://img.shields.io/github/languages/count/MLH-Fellowship/pod-3.1.0-easify) ![Issues](https://img.shields.io/github/issues/MLH-Fellowship/pod-3.1.0-easify) ![PRs](https://img.shields.io/github/issues-pr-raw/MLH-Fellowship/pod-3.1.0-easify) ![MIT License](https://img.shields.io/github/license/MLH-Fellowship/pod-3.1.0-easify) ![activity](https://img.shields.io/github/commit-activity/m/MLH-Fellowship/FellowStories) ![contributors](https://img.shields.io/github/contributors-anon/MLH-Fellowship/pod-3.1.0-easify) ![size](https://img.shields.io/github/languages/code-size/MLH-Fellowship/pod-3.1.0-easify) ![lines](https://img.shields.io/tokei/lines/github/MLH-Fellowship/pod-3.1.0-easify)

## What it does
Easify is a smart chrome extension. This extension will help you smartly and drastically increase your personal productivity while surfing the internet while taking care of your health and well-being. It will act as your personal companion by keeping constant checks over your emotions, your posture and maintaining your productivity while browsing. When a user gets distracted it will politely remind the user that they are getting distracted. It suggests user remedies such as “take a break” or “have a cup of coffee” along with suggesting some music from their playlist or otherwise, based on the user's emotion. Users will also be given a choice to analyze his/her mood and number of distractions over time in order to retrospect their productivity and health. On the basis of screentime, it will also remind the user to take refreshment breaks to hydrate themselves.

## Objective
- Posture detection of the user and prompting if the posture is incorrect
- Suggesting memes/music to the user on basis of their emotions
- Displaying graphs displaying attentiveness of user
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
- CockroachDB

## Features

### Calming UI
Easify has a calming UI that is pleasing to the eyes and soothes the mind. This design is developed to enhance the productivity of the developers. 

### Pose Detection
Developers sit all day in front of their computers, and it's essential to keep in mind their health. Sitting in the wrong position is known to show a lot of adverse effects on the health of people. To resolve this issue, easify has a pose detection model that tells the users if they are sitting in the wrong pose. It even highlights the percentage of wrong and correct poses using which users can correct pose.

### Emotion Detection
Everyone talks about the physical health of the developers but what about their mental health? Studies have shown that mental health is the most important factor to keep a person productive in their work. So, easify comes packed with an emotion detection model that predicts users' emotions from their facial gestures and sends frequent emotions to help the developers in tracking their emotions. These notifications also allow the users to play music if they are found to be sad or happy. 

### Mood-based music 
Easify can detect users' moods/emotions from their camera but this is not it! We have enabled easify to play uplifting music if they are sad and joyful music if they are happy. It is all done with the combination of Youtube API and Cockroach DB. 

### Attention tracker 
Studies have shown that a person is less likely to be distracted if he/she keeps a track of his attention but keeping this track can be exhausting but no worries! Easify has this covered for you. At times developers lose focus while working. To make them more productive, easify shows developers how much they were attentive in the last 5seconds. **This attention tracker not only keeps a track of the head movement but also the movement of eyeballs which makes it super efficient in tracking the focus of the user.**

### Attention tracker graph
With attention tracker, we have one more feature that allows users to see the history of their attention and the number of times they were distracted by the means of a beautiful and easy-to-understand graph. 

### Refreshment break reminder
Ever heard about the Pomodoro technique to increase productivity? Well, it is a technique that uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. So, to make developers more productive, easify notifies them to take breaks after a fixed interval. 

### Website blocker
We are humans, and sometimes we are driven by our wants and desires. It is possible that uses' might try to use websites like Instagram and Facebook while focusing on their work thus reducing their productivity. So, to tackle this, easify is equipped to block such websites with an inbuilt website blocking feature. 

## 24/7 up-time
Easify is built to track users' productivity, and thus, easify never rests, not even when Chrome is closed! Easify is always on its toes to serve its purpose of being a good productivity tool.  

### Security of users' data
All the classification and machine learning models are run in the users' browsers, and no data is transferred anywhere! 

## Application images

<div align="center">
  <img width="240" alt="easify" src="https://github.com/MLH-Fellowship/pod-3.1.0-Easify/blob/staging/client/assets/imgs/head.png?raw=true">
  <img width="240" alt="easify" src="https://github.com/MLH-Fellowship/pod-3.1.0-Easify/blob/staging/client/assets/imgs/home-pg.png?raw=true">
  <img width="240" alt="easify" src="https://github.com/MLH-Fellowship/pod-3.1.0-Easify/blob/staging/client/assets/imgs/emotion-noti.png?raw=true">
  <img width="240" alt="easify" src="https://github.com/MLH-Fellowship/pod-3.1.0-Easify/blob/staging/client/assets/imgs/atn-graph.png?raw=true">
  <img width="240" alt="easify" src="https://github.com/MLH-Fellowship/pod-3.1.0-Easify/blob/staging/client/assets/imgs/atn-graph2.png?raw=true">
  <img width="240" alt="easify" src="https://github.com/MLH-Fellowship/pod-3.1.0-Easify/blob/staging/client/assets/imgs/website-blk.png?raw=true">
</div>

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

## Team

The following is our team for the hackathon submission - 

| S.No. | Name               | GitHub :octocat:                             |
| ----- | ------------------ | ---------------------------------------------------- |
| 1.    | Ahana Datta |  [@adata11](https://github.com/adata11)           |
| 2.    | Eshika Shah      | [@EshikaShah](https://github.com/EshikaShah) |
| 3.    | Uttam Singh  | [@Uttam-Singhh](https://github.com/Uttam-Singhh) |
| 4.    | Sanjali Batra  | [@lavcodes](https://github.com/lavcodes) |
| 5.    | Shubham Gautam  | [@ishubham21](https://github.com/ishubham21) |

