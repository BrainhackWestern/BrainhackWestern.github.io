Welcome to the project page of Brainhack Western 2022!

### Table of contents
The projects are ordered based on when participants added them. Here's a list if you're here browsing.

* [Safer Multimodal Teleoperation of (Simulated) Robots](#multimodal-teleop)
* [Brain3DVis: AR/MR MRI Visualizer](#brain3dvis)
* [Functional Atlas Explorer](#atlasexplorer)
* [DWI Fiducials](#dwifiducials)
* [Placeholder](#placeholder)


***

### Projects

**Safer Multimodal Teleoperation of (Simulated) Robots**<a name=multimodal-teleop></a> \
Pranshu Malik ([@pranshumalik14](https://github.com/pranshumalik14))

Being confused, freezing, or panicking while trying hard to stop, re-direct, or stabilize a drone (or any such robot/toy) in sudden counter-intuitive poses or environmental conditions is likely a relatable experience for all of us. The idea here is about enhancing the expression of our intent while controlling a robot remotely — either in real life or on a computer screen (simulation) — while not replacing the primary instrument of control (modality) but instead by also integrating our brain states (thought) in the control loop as measured, for example, through EEG. Specifically, for the scope of the hackathon, this could mean developing a brain-machine interface for automatically assisting the operator in emergency cases with “smart” control command reflexes or “takeovers”. Such an approach can be beneficial in high-risk cases such as remote handling of materials in nuclear facilities or it can also aid the supervision of autonomous control, say in the context of self-driving cars, to ultimately increase safety.

For now, we could pick a particular type of simulated robot (industrial arms, RC cars, drones, etc.) and focus on designing and implementing a paradigm for characterizing intended motion and surprise during undesired motion in both autonomous (with no user control but robot’s self- and environmental influences) or semi-autonomous cases (including user’s control commands), i.e., we can aim to measure intent and surprise given the user’s control commands, the brain states, and robot states during algorithmically curated cases of robot motion. This will help us detect such situations and also infer desired reactions to accordingly adjust control commands to achieve desired reactions during emergencies and, more generally, to augment real-time active control to match the desired motion. We can strive to keep the approach suitable for generalizing well enough to robots of other types and/or morphologies and to more unusual environments.

**Brain3DVis: AR/MR MRI Visualizer**<a name=brain3dvis></a> \
Liam Bilbie ([@LiamBilbie](https://github.com/LiamBilbie))

Application that uses a web-based front end where users can submit brain MRI volumes. The data is then processed on the application backend, a 3D model is generated, and is then accessible in a AR/VR environment. We are using the MERN stack for the web component and C#/Unity for the AR/VR application. We would love to work with people who have experience with MRI volumetric segmentation or are interested in VR/AR data visualization. :slightly_smiling_face:

**Functional Atlas Explorer**<a name=atlasexplorer></a> \
Caroline Nettekoven ([@carobellum](https://github.com/carobellum)) and Ladan Shahshahani ([@lshahsha](https://github.com/lshahsha))

“What does the inferior frontal gyrus do?” Googling this question returns 93,400,000 results. A skim read of paper abstracts will give you some ideas about its functions. But wouldn’t it be useful to have an interactive map where you can explore these functions in the brain? Imagine clicking on a brain region and getting a word cloud of functions that this region is highly involved in. That’s what we will build!

We will create an interactive tool, useful for anyone wanting to explore their own functional data or openly available functional datasets. Together with our functional fusion toolbox (in-house & soon to be released), it lets you integrate information from many different openly available datasets (Human Connectome Project, etc).

During the project you will be able to use our existing toolbox to explore these large datasets - as well as your own data! In addition, this interactive map will provide a side by side view of your desired brain regions and their connections with other brain regions. Click on a region and you get a map of its functional connectivity to all other regions in the brain.

The tool will help synthesize findings across studies (think Neurosynth, but directly based on fMRI data) and aid interpretation of results as well as planning of future experiments.

**DWI Fiducials**<a name=dwifiducials></a> \
Arun Thurairajah

Diffusion-Weighted Imaging (DWI) is a variant of the standard MRI sequence examining the diffusion rate of water molecules.  DWI or Diffusion MRI has allowed for the improved study of white matter pathways across both diseased and healthy patients.
The goal of the diffusion Fiducials or dFIDs project is to identify a set of anatomical landmarks on a variety of Diffusion-Weighted MRI images that are both salient and have functional significance.  This will be an extension of the previous Anatomical Fiducials (AFIDs) project that has localized a set of 32 clinically-relevant landmarks in humans, macaques, and PD patients in multiple imaging acquisitions (see https://doi.org/10.1002/hbm.24693).

We are looking for students, researchers, and clinicians to determine potential fiducials across various acquisition types and models in DWI.  Those with experience in acquiring diffusion images or who have an interest in neuroimaging or anatomy are welcome to join!
