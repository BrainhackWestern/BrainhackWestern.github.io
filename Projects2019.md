Welcome to the project page of Brainhack Western 2019! Please post a short description of your projects below.

### Table of contents
The projects are ordered based on when participants added them. Here's an alphabetical list if you're here browsing. Make sure to add your own when you update this wiki page.

* [Anatomical Fiducial webapp](#afid)
* [confounder: A BIDS/fMRIPrep app to help users decide which confounds should they include in their task-based GLM model](#confounder)
* [Generating Seed-Based Heritability Maps of the Cortex](#seed-cortex)
* [Implementation of ICA Aroma ICA FIX confound regression for rodent fMRI data](#ICAAROMArodent)
* [Is deeper better?](#deepnet)
* [What do brain sound like](#zombie-brains)

***

### Projects

**Implementation of ICA AROMA ICA FIX confound regression for rodent fMRI data**<a name=ICAAROMArodent></a> \
Gab-D-G

At this Brainhack I am planning to learn the implementation of ICA-AROMA/ICA-FIX, optimized for to work with rodent fMRI data. These algorithms use Independent Component Analysis (ICA) on the preprocessing fMRI data to detect confounding sources of signal and automatically regress these out from the fMRI timeseries.
I will try to implement these algorithms within RABIES (https://github.com/CoBrALab/RABIES), which is an automated fMRI preprocessing pipeline for rodent images that we've developed in my lab. I am also planning to write a python package for automated confound regression based on the outputs from RABIES with a command line interface with user-specified parameters for a confound regression of interest.
I would thus be looking forward to work with anyone who is experienced with ICA-AROMA/FIX tools, is interested in learning about fMRI preprocessing and/or software development, or would be interested in learning about RABIES!

**What do brain sound like?** <a name=zombie-brains></a> \
jomanovic

I'm interested in studying the relationship between brain activity (captured for instance using fMRI) and music. The basic idea is to fix a representation of the brain (waveforms, fMRI imaging data, etc) and choose the dataset consisting of such a representation which exposes the subject to various sounds ([search music](https://openfmri.org/dataset/)). By modeling the sounds as a function of brain activity, we can ask what do the brains of different people or different species sound like? This will answer the long standing question, do Zombies eat brain because they like how they sound.

**confounder: A BIDS/fMRIPrep app to help users decide which confounds should they include in their task-based GLM model** <a name=confounder></a> \
Suzanne Witt (switt4)

I have built a BIDS/fMRIPrep app, confounder, that helps users make informed decisions about which confounds they should include in a first-level, task-based fMRI GLM to optimize model-fit.  Experimental confounds are included in first-level GLMs in an effort to control for noise.  The confounder app calculates regional R^2 model fit for task-based fMRI data, comparing different models including different sets of experimental confounds.  The functionality of the app is in place, however, one of the key aspects of a useful BIDS app is a clear output report, typically formatted as an html file.  My project is to take the graphs and numeric information exported by the confounder app and turn these files into a single, understandable html file.

**Anatomical Fiducial (AFID) Web App** <a name=afid></a> \
Patrick J. Park, Tristan Kuehn, Jonathan C. Lau and anyone else interested!

We will be working on further developing a web app for validating the placement of fiducials on anatomical landmarks. While an initial proof-of-concept web page has been deployed, we will be working on improving the following features (also up for new suggestions):
current link available at http://fidvalidator.pythonanywhere.com/

* database construction
* visualization
* migration to heroku
* Tools used: Flask, Postgres, JavaScript etc. 

**Generating Seed-Based Heritability Maps of the Cortex** <a name=seed-cortex></a> \
Nadia Blostein

**Is deeper better?** <a name=deepnet></a> \
Marieke Mur, Ehsan Tousi
