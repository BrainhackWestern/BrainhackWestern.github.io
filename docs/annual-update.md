# New Year Update Guide


## Install and update dependencies

If you're taking over the project, start by making a fork on github. This will give you a staging site where you can test your changes!

Then, clone your fork to your local machine

```
git clone git@github.com:<your github account>/<name of fork>.git
```

After cloning, you may wish to add the official site repo as an upstream remote:

```
git remote add upstream git@github.com:BrainhackWestern/BrainhackWestern.github.io.git
```

If last year's site has not already been tagged, do so now:

```
git tag <yyyy>
git push upstream --tags
git push --tags
```

Check that you have the latest version of node and npm installed:

```
npm --version
```

You may wish to use [nvm](https://github.com/nvm-sh/nvm) to manage your node versions.

Once you've confirmed this, navigate to the directory containing the brainhack website and install:

```
npm install
```

Hopefully everything worked without issue! If so, start by updating the project dependencies. Check for outdated deps first using:

```
npm outdated
```

Go to the `package.json` and update modules listed by the above command to their latest versions. Then run:

```
npm update
```

Finally, check the resulting website:

```
npm run dev
```

You may wish to compare to the [official site](https://brainhackwestern.github.io/). Check that everything is still working after the updates. Likely some of the updates will have introduced breaking changes that will need to be fixed. Do this in consultation with the relevant release notes and documentation.


**NOTE**: To get the google maps integration working (for the location section), you need a maps API key. Instructions for this can be found in README.md


## Update Content

Go through `config.yaml` line by line and update everything that's out of date. You likely won't have any schedule or workshop information when first setting up the site, so for now just turn those sections off by setting `displaySections.tutorial/schedule: false`.

You may wish to refresh the splash screen for the coming year. This needs to be done by editing the source code in `pages/index.tsx`. Typically you'll change the background and hero image. These are both contained in the `<div className={styles.home.splash}>...</div>` block.

The year's splash logo will always need to be updated, as it contains the year. If you have the original svg file, you can open it in [`inkscape`](https://inkscape.org/) to change the text. The file requires the [JetBrains Mono](https://www.jetbrains.com/lp/mono/) font.


## Update Registration Form

Login to [Cognito Forms](https://www.cognitoforms.com/) using the Brainhack Google account. You should see registration forms from the last years on the main screen. Hover your mouse over the previous years form, and a `copy` link should appear. Use this to create a copy of the form for the current year. Press the `build` link and edit the form as needed. As of 2023, the Open/Close dates for the form can be set by clicking the `Workflow` button at the very bottom of the `Build` page, then clicking the `Public Links` drop-down tab in the left-hand control panel, then setting the relevant dates in the `Allow Links` section.

To edit the volunteer registration code, go to the `Calculations` section of the form and click on the `CorrectVolunteerCode` field. Set the `Default Value` of the field in the left-hand control panel to whatever you want the volunteer code to be.

To publish the form onto the website, click the `Publish` button at the top of the `Build` page. In the control panel on the left-hand side, copy the embed code from the `Embed in your site` section. Paste the entire embed code into `config.yaml` into `forms.registration.embedTag`. Do not change anything else in the `forms` section of `config.yaml`. Preview the registration form by manually navigating to the `localhost:3000/forms/registration` page on your development site. Use `localhost:3000/forms/registration?id=<volunteercode>` to test the volunteer registration form.

Volunteers can input their volunteer code by using the url `https://<brainhack_website>/forms/registration?id=<volunteercode>`

## Update Make.com integration

Sign in to your [Make.com](https://www.make.com/en) account and navigate to the Brainhack organization (hopefully a previous volunteer or exec added you to this).

You'll need to renew all the account integrations. Use the left-hand menu to navigate to the `Connections` Page. Select `Reauthorize` for the `Brainhack Gmail` and `Brainhack Sheets` connections. You'll receive a Google sign in popup. After signing into the Brainhack google account, accept all the permissions you're presented with (for the Gmail integration, you'll have to continue past a scary looking warning page).

## Interest Form

Before registration opens, the registration button is replaced with a little form people can give their email to for a registration notification. This form gets sent to a webhook on Make.com. On your account page, using the left-hand menu, go to the `Scenarios` page and select the `Interest Email Form` scenario. Click somewhere in the flowchart to edit it. Select the `Google Sheets` bubble, and use it to link the scenario with a Google Sheet in either the Brainhack drive (using the Brainhack Sheets connection), or your personal drive (you might need to set up or re-activate your own connection). Ensure the `email` field gets inserted into the sheet. When finished editing, press the save button at the bottom of the workspace (centre-left of the screen), and ensure the scenario is turned on (the toggle on the left bottom corner of the workspace). To manually test: select the leftmost Webhooks bubble and copy the blue url reading `https://hook.us1.make.com/XXXXXXXXXXXXXXX`. Use the following command:

```
curl --data "email=test@test.com" "https://hook.us1.make.com/XXXXXXXXXXXXXXXXXXXXXX"
```

replacing the `XXXX` with the actual key in the webhook you copied. Press the back button in the top left corner of the workspace to go back to the overview page, and click the `history` tab on the top-bar of the overview. You should see the request you just made in the history list. If you open the linked google sheet, you should see your test email as an entry.

Note that the email form is set to TEST mode on development servers, so even if you did the above correctly, the form won't actually work. Instead, it will just sit for 5 seconds, then report a successful email submission. To test for real, either manually override the code in `components/email-form.tsx` (if you know what you're doing) or push the site to your staging server, as described below.

## Pushing to the staging server

Once everything is working in the local dev site, you can push back to your staging server (i.e. your fork of the main repo you made earlier). Before doing this, open `.env.production`, and change the line:

```
NEXT_PUBLIC_URL='/brainhack_western_test_site'
```

so that `NEXT_PUBLIC_URL` is set according to the repository name of your fork. If you want the google maps inlay to work on your staging site, you'll also need to set `NEXT_PUBLIC_MAPS_EMBED_API_KEY` to a key scoped to your staging site URL ([see here](https://developers.google.com/maps/documentation/embed/map-generator#create-project)). Then commit all your changes and push them back to the server:

```
git push origin
```

If everything worked correctly, you should be able to go the `actions` page of your fork and see the app building and deploying. Once deployed, visit the website (`https://<your github account>.github.io/<repository name>`) to view the results.


## Pushing to production

If you're happy with the staging server, you should be able to push everything as-is to the production server:

```
git push upstream
```

The website and actions are already configured for the main server, so the website should build and deploy without issue if everything up till now worked out.

