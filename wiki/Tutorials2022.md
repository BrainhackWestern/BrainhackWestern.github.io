Welcome to the tutorial page of Brainhack Western 2022! A short description of the tutorials being taught are available below. 

### Table of contents
The tutorials are currently not in any particular order.

* [FANBIDS: A framework for analyzing fNIRS data with BIDS](#fanbids)
* [The brain in time: data analysis and machine learning for EEG](#eegmachine)
* [Data mining: meta-analyses for neuroimaging data](#metaanalyses)
* [Demystifying Git and GitHub](#git)
* [Research data management: from collection to sharing](#datamanagement)
* [Data visualization: Designing and constructing informative graphics](#datavisualization)
* [Reproducible data analysis with workflows](#workflows)
* [Unintended racial bias in predictive modeling: a panel discussion](#edi)
* [A brief introduction to MRI](#mri)
* [Modern Realities of Behavioral Research](#behavior)
* [Neuroanatomy for Researchers: a Focus on Surgical Targets](#anat)

***

### FANBIDS <a name=fanbids></a>

Organizer: Kevin Stubbs

#### Synopsis
FANBIDS is a collection of guidelines and MATLAB utilities that extends the benefits 
of  BIDS  to  fNIRS  data  at  every  stage  of  processing.  The  framework  is  not  tied  to  any  single 
toolbox and aims to eventually  facilitate  cross-toolbox interactions. The  primary  benefits  include 
(1)  producing  file  structures  that  are  intuitive,  descriptive,  and  portable,  (2)  scaling  well  to  large 
datasets,  and  (3)  promoting  an  ecosystem  of  widely  compatible  tools.  Two  fully  functional 
example  tools  will be  presented:  cardiac-based  channel  screening  and  a  figure  generation  module.  A 
workflow manager that applies the framework will also be shown.

### The brain in time <a name=eegmachine></a>

Organizer: Diana Dima

#### Synopsis
This tutorial will cover the basics of EEG data analysis, with a focus on how we can use tools from machine learning and computer vision to investigate rich spatiotemporally resolved datasets. There will be an interactive component allowing participants to look at real EEG data and try out analysis steps.

### Data mining <a name=metaanalyses></a>

Organizer: Suzanne Witt

#### Synopsis
Meta-analyses of neuroimaging data are a good way to get started with understanding neuroimaging and task-based neural processing, as well as, answer research questions that may not be easily addressed with by traditional data collection.  This tutorial will cover the various aspects of designing a meta-analysis and some of the more popular methods, including both topic- and contrast-based meta-analyses and coordinate- and image-based meta-analyses. Some hands-on work with the python-based tool NiMARE with a sample dataset will be included to help attendees appreciate some of the nuances between the various types of meta-analyses.  A new, web-driven all-in-one meta-analysis toolbox will also be introduced.

### Demystifying Git <a name=git></a>

Organizer: Suzanne Witt

#### Synopsis
Git offers a simple and powerful way to track changes and automatically version control scripts and workflows, making collaborative coding much simpler. This hands-on tutorial will introduce new Git and GitHub users to the basics of the three-stage directory structure of Git, commits, branching, merge conflicts, forking, and pull requests.  Both basic command line and GUI-based approaches will be covered.  This tutorial is designed for people with little to no prior experience with Git and GitHub.  More advanced topics, such as Git actions, will be mentioned but not covered.  Come prepared with a GitHub account and and GitHub desktop installed (https://desktop.github.com).  It is not necessary to install the Git sourcecode.  (See https://git-scm.com/downloads/guis for a more complete list of GUI-based Git clients.)

### Research data management <a name=datamanagement></a>

Organizer: Tristan Kuehn

#### Synopsis
Handling data can be a challenge, and it’s best to think about it before you need to organize it on a deadline. In this tutorial you’ll learn best practices for collecting, storing, processing, and sharing your data. We’ll go over writing a Data Management Plan, formatting your data with BIDS and other open standards, and version controlling your data with DataLad, and uploading to a public repository.

### Data visualization <a name=datavisualization></a>

Organizer: Tristan Kuehn

#### Synopsis
A great data visualization can effectively demonstrate the arguments you’re making in a paper. In this tutorial you’ll learn about designing informative graphics, and how to use one of a selection of tools to combine your design and data into a paper-ready graphic. We’ll go over tools in Python, but most of the concepts should be transferable to your toolset of choice.

### Reproducible data analysis <a name=workflows></a>

Organizer: Tristan Kuehn

#### Synopsis
Using a workflow management tool to run your research analyses can make it much easier to remember what you’ve done with your data, make small adjustments, and describe your analyses to others in a reproducible way. In this tutorial, you’ll learn about what a workflow management tool is, why you might want to use one, and how to write your analyses as workflows. As an example, we’ll go over SnakeBIDS, a Western-grown workflow management tool for handling BIDS-formatted neuroimaging data.

### Unintended racial bias in predictive modeling

Organizer: Suzanne Witt <a name=edi></a>

Panelists: Lindsay Bodell, Luke Stark, Dan Lizotte, Amanda Moehring

#### Synopsis
Come hear both psychology and data science faculty discuss the implications of a recently published paper, *Cross-ethnicity/race generalization failure of behavioral prediction from rest-state functional connectivity* ([DOI: 10.1126/sciadv.abj1812](https://doi.org/10.1126/sciadv.abj1812)).  This paper addresses how machine learning algorithms may increase, rather than alleviate, bias and unfairness against equity deserving populations.  Learn why collecting diverse study populations is important for the generalizability of results and how naively applying machine learning algorithms to large datasets may lead to the perpetuation of unfair biases against minority populations.  Also, learn about inherent biases that may exist in many commonly used measurement techniques and tools.

### A brief introduction to MRI <a name=mri></a>

Organizer: Brad Karat

#### Synopsis
This tutorial will provide a basic introduction to MRI. We will cover where the MRI signal is originating from, what are the different contrasts, basic pulse sequences for acquiring an image, how to reconstruct and visualize an image from DICOM to NIFTI, and unique MRI contrasts such as diffusion or functional imaging.

### Modern realities of behavioral research <a name=behavior></a>

Organizers: Priya Kalra and Anthony Cruz

#### Synopsis:
This tutorial will cover the basics of behavioral data collection and analysis in neuroscience-adjacent fields such as cognitive psychology.  The session will provide a broad overview of the topic, ranging from basics of behavioral experiment design, stimulus presentation, and data collection and analysis, to emerging data analysis techniques and online data collection.  Throughout, the software options available for each step will be briefly discussed. No previous knowledge or experience is expected.

### Neuroanatomy for Researchers: a Focus on Surgical Targets <a name=anat></a>

Organizer: Alaa Taha

#### Synopsis:
In this tutorial, we will begin with a basic introduction to neuroanatomy then briefly discuss the hippocampus, basal ganglia structures, midbrain, and relatively uncharted zona incerta. Taking on a clinical lens, we will explore how these structures could be crucial targets during functional neurosurgical procedures.

We end our tutorial with 3 mini-software demo stations:

1. learning neuroanatomy using an open and validated anatomical fiducial framework (AFIDs; https://validator.afids.io/),
2. reviewing introduced anatomy in the context of a surgical case using a virtual reality headset, and
3. applying our functional neuroanatomy knowledge to plan a surgical case using a fully open-source software (trajectoryGuide; https://trajectoryguide.greydongilmore.com/).
