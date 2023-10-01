# Tab Title Extension

A simple Chrome extension that opens 3 hard coded linkedin URLs one by one and fetch data from each profile later closing the tab.

## Features

- Open linkedin URLs one by one on click of button.
- Scrap data(such as name, url, bio, about, location , follower_count, and connection_count) from each profile.
- Send data to the database through an API created on node-express-sequelize server.

## Installation

1. Clone this repository to your local machine:
```bash
git clone https://github.com/vivek-tripathi-9005/linkedin-extractor.git
cd linkedin-extractor.git
```

2. Open Chrome and navigate to `chrome://extensions/`.

3. Enable "Developer mode" in the top right corner.

4. Click the "Load unpacked" button and select the `linkedin-extractor` directory.

5. The extension icon will appear in the Chrome toolbar.

6. Create evironment variable file `.env` inside `server/` directory:
```bash
cd server
touch .env
```

7. Add below variables inside the `.env` file: 
```env
DATABASE=__YOUR_DATABASE_NAME__
USERNAME=__YOUR_DATABASE_USERNAME__
PASSWORD=__YOUR_DATABASE-PASSWORD__
HOST=localhost
```

8. Start the postresql database on your local computer and create a database(make sure the database name in .env matches)

9. Start the server(make sure you are inside server directory)that will connect to the postresql database and will create required tables.
```bash
npm run start
```

## Usage
1. Click on the extension icon in the toolbar.

2. The popup will open with the "Click" button.



Created by [Vivek Tripathi](https://github.com/vivek-tripathi-9005)