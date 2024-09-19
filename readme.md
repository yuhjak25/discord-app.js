<h1>Discord Bot Project</h1>

<p> This project is based on the official <a rel="noopener" target="_new" href="https://discordjs.guide/#before-you-begin">Discord.js Guide</a>, and it's actively maintained and updated as new features and changes are released.</p>

<h2>Features</h2>
<ul>
<li>
<strong>Modular Structure</strong>: Commands, events, buttons, modals and select menus are all modular and easy to maintain.
</li>
<li>
<strong>Real-Time Updates</strong>: The bot is set up to handle real-time interactions using the latest version of Discord.js.
</li>
<li>
<strong>Custom Handlers</strong>: Command and interaction handlers are designed to be flexible and reusable.
</li>
</ul>

<h2>Packages Used</h2>
<ul> <li><strong>Node.js</strong>: Javascript runtime environment. </li>
<li><strong>Discord.js</strong>: The library for interacting with the Discord API. </li>
<li><strong>Nodemon</strong>: Automatically restarts the bot when file changes are detected (development only).</li>
<li><strong>Dotenv</strong>: Loads environment variables from a <code>.env</code> file.</li>
 </ul>

> Note: The project uses [Bun](https://bun.sh/) for faster performance, but it's compatible with other package managers as well.

<h2>Installation</h2>
<h3>Using Bun</h3>
<p>If you're using Bun as your package manager, run the following command to install dependencies:</p>

`bun install `

<h3>Using npm, Yarn, or pnpm</h3>
<p>If you're using a different package manager, run one of the following commands:</p>

`npm install`
`yarn install`
`pnpm install`

<h2>Runing the Project</h2>
<p>To start the bot in development mode (with automatic restarts using Nodemon):</p>
<h3>With Bun:</h3>

`bun run dev`

<h3>With npm, Yarn, or pnpm:</h3>

`npm run dev` `yarn run dev` `pnpm run dev`

<p>To start the bot use:</p>
<h3>With Bun:</h3>

`bun run start`

<h3>With npm, Yarn, or pnpm</h3>

`npm run start` `yarn run start` `pnpm run start`

<h2>Environment Variables</h2>
<p>Make sure to create a .env file in the root directory of your project with the following values:</p>

`APP_TOKEN=your_discord_app_token`
`APP_ID=your_discord_app_id`
`MONGODB_URI=your_mongoDB_url`

<h2>Contribution & Updates</h2>
<p>As the project evolves with Discord's API and the Discord.js library, updates will be made. Contributions and feedback are welcome to keep the bot up-to-date and functional.</p>
