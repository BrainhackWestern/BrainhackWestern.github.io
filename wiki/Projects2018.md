Welcome to the project page of Brainhack Western 2018! Please post a short description of your projects below.

### Table of contents
The projects are ordered based on when participants added them. Here's an alphabetical list if you're here browsing. Make sure to add your own when you update this wiki page.

* [autobids CFMM](#autobids-cfmm)
* [autobids to single-trial GLM](#singletrialGLM)
* [BIDS-electrodes](#bids-electrodes)
* [BIDS-ify NeuroBEER](#bidsify-neurobeer)
* [BIDS history](#bids-history)
* [Landmark Placement Validator](#landmark-validator)
* [MRS BIDS Extension Proposal](#mrs-bids)
* [prepdwi](#prepdwi)
* [task-based fMRI BIDS GUI](#taskgui)


#### autobids CFMM <a name=autobids-cfmm></a>
Anyone wishing to set-up their ongoing CFMM (3T or 7T) protocol for fully-automated BIDS conversion
* Lead: Khan Lab

The [autobids](https://github.com/khanlab/autobids) platform provides automated BIDS conversion after acquisition of your data, providing users with already converted and (optionally) post-processed data ready to use shortly after acquiring the scan. Our goal is to set-up as many projects as possible over the hackathon!

To set up your study fill out the form here: [https://goo.gl/forms/J38560Im1h4jtKi12](https://goo.gl/forms/J38560Im1h4jtKi12)

#### BIDS-ify NeuroBEER <a name=bidsify-neurobeer></a>
Jason Kai and anyone else who wants to help

The [NeuroBundle Extraction and Evaluation Resource](https://github.com/kaitj/neurobeer) is a data-driven tractography clustering tool. With the current version of this tool, the user can perform tractography based on geometric features, or quantitative MRI characteristics (e.g. fractional anisotropy). However, there is no enforced standard in how each user structures their files or directory. Our goal with this project is is to adopt and implement BIDS file standards to the tool such that users can point the BIDS folders and tell it what type of information to use in the clustering.

<a name=mrs-bids></a>
#### MRS BIDS Extension Proposal
Dickson Wong, any potential users or developers of MRS and MRS analysis pipelines

The current BIDS standard (http://bids.neuroimaging.io/) does not accommodate spectroscopy data. The aim of the project is come up with a proposal for a spectroscopy extension to the BIDS standard. Specifically the goals are:
* to review the current BIDS standard and the existing extension proposals (PET, EEG, MEG, etc.)
* to review what has already been accomplished in terms of a MRS BIDS extension
* to draft a document describing the proposed MRS BIDS extension

#### prepdwi BIDS app<a name=prepdwi></a>
Ali Khan and any potential users of DWI or pipeline developers

The prepdwi app (https://github.com/khanlab/prepdwi) is a BIDS app under development that performs pre-processing (denoise, unring, top-up, eddy, bedpost, T1 registration, gradient unwarping, kurtosis, atlas registration.. ) of DWI data, and also currently generates probabilistic tractography matrices using FSL probtrack, and BIDS-style output. The goal is to further improve the app by having new users apply it to their data, add new features requested by users, and fix any bugs that are found! Planning to have an informal intro session during the hackathon to get new users started.

#### task-based fMRI BIDS GUI<a name=taskgui></a>
Olivia Stanley and any potential users of BIDS who do task based experiments

Creation of a graphical user interface for tasked based fMRI users who use the autobids pipeline. This interface would allow for the creation of the task based json files needed with BIDS that could then be included in autobids conversion. All task based experimenters should come share what they need to record for their experiment to make the tool a flexible as possible.

#### autobids to single-trial GLM<a name=singletrialGLM></a>
Jordan DeKraker, H.Y., Khan and Kohler labs, anyone doing task-based fMRI. NEEDED: somebody with SPM experience

The goal of this project is to extend [autobids CFMM](#autobids-cfmm) for task-based fMRI data to perform first-level analysis using single-trial GLM with [this method](https://www.sciencedirect.com/science/article/pii/S1053811911010081). This is the most general form of first-level analysis, and subsequently trials can be grouped into any configuration of conditions. Inputs will be either a list of event onsets (which can later be grouped into conditions by the experimenter) or outputs from project [task-based fMRI BIDS GUI](#taskgui). This analysis will be performed in the [SPM BIDS App](https://github.com/BIDS-Apps/SPM).

#### BIDS-electrodes<a name=bids-electrodes></a>
Jonathan C. Lau, Ben Corrigan, Greydon Gilmore, Neda Kordjazi, all welcome!

This project will involve establishing a local working group of researchers and clinicians interested in intracranial electrode data. We will focus on unique challenges in this study population related to data curation, organization, and analysis. To name a few, some of the issues include: participant confidentiality/defacing of data, organization of data (imaging, electrophysiology, electrode location), fusion of electrode location data, the variety of electrode types/dimensions/vendors, fusion of electrophysiological data with imaging data, stimulation data versus recording data (and different parameters), micro-electrode versus local field potential data, cross-species compatibility, etc. We will start by working through the existing [BIDS-iEEG specifications (BEP010)](https://docs.google.com/document/d/1qMUkoaXzRMlJuOcfTYNr3fTsrl4SewWjffjMD5Ew6GY/edit), [BIDS-EEG specifications (BEP006)](https://docs.google.com/document/d/1ArMZ9Y_quTKXC-jNXZksnedK2VHHoKP3HCeO5HPcgLE/edit), and [BIDS-MEG specifications (BEP008)](https://docs.google.com/document/d/1FWex_kSPWVh_f4rKgd5rxJmxlboAPtQlmBc1gyZlRZM/edit) together. Deliverables may include recommending modifications to the original specifications based on how compatible existing specs are with local needs/experiences. Specific spin-off projects (e.g. new specs, BIDS-apps) will be guided by local perceived priorities as well as suggestions from the greater (global) BIDS/BrainHack community.

#### BIDS-history<a name=bids-history></a>
Yiming Xiao and anyone interested in adding processing history to BIDS format

As often processed data don't contain the record of relevant processing steps previously done, it can be confusing when new users need to access the data and conduct their own processing and analysis.
The goal of the project is to add such a record in a standard format to improve the documentation of image processing.

#### Landmark Placement Validator<a name=landmark-validator></a>
Patrick J. Park, Jonathan C. Lau, Olivia Stanley and anyone else interested!

We will be working on further developing a web app for validating the placement of fiducials on anatomical landmarks. While an initial proof-of-concept web page has been deployed, we will be working on improving the following features (also up for new suggestions):
- metrics calculation
- backend stabilization
- UI improvements
