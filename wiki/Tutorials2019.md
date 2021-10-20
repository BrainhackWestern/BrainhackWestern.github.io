Welcome to the tutorial page of Brainhack Western 2019! A short description of the tutorials being taught are available below. 

### Table of contents
The tutorials are ordered based on when participants added them. Here's an alphabetical list if you're here browsing. Make sure to add your own when you update this wiki page. 

* [Anatomical Fiducials](#afids)
* [Intro to DTI](#dti)
* [Intro to EEG](#eeg)
* [Intro to fMRI](#fmri)
* [Intro to fNIRS](#fnirs)
* [Intro to Image Manipulation](#image_manip)
* [Intro to Deep Learning](#ml)

***

### Intro to Image Manipulation <a name=image_manip></a>

Organizers: Olivia Stanley & Jason Kai

#### Synposis
This tutorial will teach one to manipulate and transform neuroimaging data using Python with commonly used. First, an understanding of how MRI data is represented in Python will be discussed followed by hands-on tasks such as basic manipulation of neuroimaging MRI data. All content will be performed using Jupyter notebooks in the spirit of reproducible and open science!

### Intro to fMRI <a name=fmri></a>

Organizers: Suzanne Witt & Justine Clery

#### Synposis
In this tutorial, minimally preprocessing of functional data using `fmriprep` will be discussed and the steps the tool performs. Following preprocessing, the data will be cleaned and made workable through motion cleaning and dimensionality reduction. The final component of the tutorials involves functional connectivity analysis. All content will be performed using Jupyter notebooks in the spirit of reproducible and open science! It is recommended (thhough not required) to attend the [Intro to Image Manipulation](#image_manip) tutorial.

### Intro to Electroencephalogram (EEG) <a name=eeg></a>

Organizers: TBA

#### Synposis

Coming soon...

### Intro to Deep Learning <a name=ml></a>

Organizers: Jordan DeKraker & Haider Al-Tahan

#### Synposis

This tutorial will be broken up into a theoretical (~1hr) and practical component (~2hr). The theoretical component will provide 1) a basic overview of neural networks (NNs) and backpropagation, 2) an overview of several key NN architectures including convolutional and recurrent networks, and 3) an open discussion of active areas of NN research. The practical component of this tutorial will focus on hands-on experience with Tensorflow. Topics will include 1) organization of code into classes, functions, and the Tensorgraph, 2) examples of dense and convolutional networks for real problems using high-level Tensorflow tools such as built-in Keras functions, and 3) an open session for exploring and adapting existing NNs or for helping attendees build their own networks.

### Intro to Diffusion Tensor Imaging (DTI) <a name=dti></a>

Organizers: Jason Kai & Olivia Stanley

#### Synposis

This tutorial will go over the basics to process data from MRI acquisitions to computing diffusion tensors and tracking the structural connectome. Minimal preprocessing steps will be explained. All content will be performed using Jupyter notebooks and [`dipy`](http://dipy.org) in the spirit of reproducible and open science! It is recommended (though not required) to attend the [Intro to Image Manipulation](#image_manip) tutorial.

### Intro to Functional Near-Infrared Spectroscopy (fNIRS) <a name=fnirs></a>

Organizers: Nicolette Armstrong

#### Synopsis

In this session, you will get an overview of fNIRS (functional near-infrared spectroscopy), and see a live demonstration of fNIRS data acquisition and analysis. fNIRS is a relatively new neuroimaging method, that has gained in popularity over the last 20 years. fNIRS uses an array of light sensors on the surface of the scalp to detected oxygenated and deoxygenated bloodflow in cortex. fNIRS is low-cost, minimally invasive, offers reasonable spatial and temporal resolution, and is easily combined with other neuroimaging methods. In this session, we’ll discuss fNRIS methodology and applications, as well as the current state of affairs for fNIRS analysis.

### Anatomical Fiducials <a name=afids></a>

Organizers: Geetika Gupta & Greydon Gilmore

#### Synopsis
The tutorial will be a walkthrough of how to manually identify and mark 32 sub-cortical structures. These points are easily found in all structural MRIs and can be used to quantitatively asses subject to template and template to template registration. We will be using 3D Slicer for the tutorial, so if you are not familiar with this software it will also be a great opportunity to become familiar! It will also be a great opportunity to learn more neuroanatomy. We will spend the time walking you through how to find/place each fiducial point on an MNI template. After you have placed the 32 points, you will be able to run them through a validator, which will provide you real-time feedback on how accurate/precise you were at finding the points. THINGS TO BRING: laptop, a mouse and download/install 3D Slicer prior to the session (stable: https://download.slicer.org/).
