This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Updating Data

Most data for the site is stored in the [config.yaml](config.yaml) file. Values here can be updated directly on github by clicking the pencil icon at the top of the file. Once you've made changes, they can be saved through a Pull Request.

## Running a dev server

First, clone this repository:

```
git clone https://github.com/pvandyken/brainhack_western_test_site.git brainhack
cd brainhack
```

Ensure you have node installed on your system. See [here for installers](https://nodejs.org/en/download/). Then, install npm dependencies:

```
npm install
```

Start the server with:

```
npm run dev
```

The site can be accessed at `localhost:3000`.

In order for the google maps inset to work on your local machine, you will need a Google API key. You get this by following [Google's instructions](https://developers.google.com/maps/documentation/embed/map-generator#create-project). Once you have your key, run the following in the top level directory of the site to create an env file:

```
echo "NEXT_PUBLIC_MAPS_EMBED_API_KEY=[your key here]" > .env.local
```

You should now have a functional development site.

## Staging

Any changes should be staged before pushing to the main repo. A staging server can be made simply by forking this repository. Generally, all changes should first be pushed to a fork, tested, then merged into the main repository via PR.

In order for the stage to display correctly, you need to update the value of the base path. Open the `.env.production`, and make sure the value of `NEXT_PUBLIC_URL` matches your staging repository name. If it doesn't, set it accordingly. If you forked your staging repository directly from the production repo, this shouldn't need to be changed.

Just as with the development site, you need an API key from google to display maps correctly. Ideally, you should create a new key restricted to your github domain. The screen where you generate these keys contains instructions for doing this. Once you have your new key, go to your github repo's settings page and open secrets. Click on New repository secret, put your key into the body, and name it `MAPS_EMBED_API_KEY`.

After pushing, give a few minutes for Github Actions to generate the site. You can view its progress by looking at the Actions page in your github repo. Once its finished, you can access the site by going to Settings, selecting Pages, and clicking on the link provided.