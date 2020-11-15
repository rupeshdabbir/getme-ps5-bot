# getme-ps5-bot

The goal of this project is to auto check and buy a PS5 when a stock is available. Nothing else. I just personally wanted to buy a PS5 and hence this project.

### Installation

 1. [Install Node.js](https://nodejs.org/en/)
    1. version should be >12.9
 2. [Install git](https://git-scm.com/)
 3. download this project
    1. `git clone https://github.com/VVNoodle/PS5bot`
 4. Open up a terminal
 5. go to project directory `cd /the/project/directory`
 6. Install `yarn` by running `npm i -g yarn`
 7. Install dependencies by running `yarn`
 8. Make CLI callable  
    `yarn link`  

## Setup

 1. Run ps5bot. You'll be prompted to fill in required checkout info  
    `ps5bot`  
    **Note: Below steps are still TODO**  
 2. Run scraper
    `ps5bot scrape`
    - you will be asked to select the sites to run the bot. If you don't select anything, it will try to run on all websites.
