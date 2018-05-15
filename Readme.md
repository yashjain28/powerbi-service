
# ipm package: powerbi-service

## Overview
Power BI is a suite of business analytics tools that deliver insights throughout your organization. Connect to hundreds of data sources, simplify data prep, and drive ad hoc analysis. 


This package lets user perform external analytics using PowerBI. User can use it to produce beautiful reports, then publish them for their organization to consume on the web and across mobile devices. Everyone can create personalized dashboards and scale across the enterprise, with governance and security built-in.


This is an ipm package, which contains one or more reusable assets within the ipm Community. 
The 'package.json' in this repo is a ipm spec's package.json, [here](https://docs.clearblade.com/v/3/6-ipm/spec), which is a superset of npm's package.json spec, [here](https://docs.npmjs.com/files/package.json).

[Browse ipm Packages](https://ipm.clearblade.com)

## Setup

1. Setup on PowerBi:
	Following steps are assuming user already has a account on PowerBI.
	1. Create a streaming dataset in PowerBI. It can be easily created by selecting on the workspace tab on the PowerBI console and create new dataset button and selecting the API option over there.
	2. User needs to specify the payload structure when creating a dataset. The post payload should maintain the corresponding structure.
	3. The URL specific to the above dataset can be copied from here and pasted into the ConstantsPowerBI library.
	4. There is no need for an API key when using this URL. So it's advised to keep it secret.

2. Setup on ClearBlade: 

	1.  Navigate to the Code / Libraries / ConstantsPowerBI and provide your the URL, where the data needs to be published. 
	
	2.  As a developer, browse to the service Code / Services / SetupPowerBI
	    1.  Modify the constants at the top, if required
	    2.  Save and Test the service (This service only needs to be executed once)
	3.  Reusability: Data can be published to multiple datasets in the same fashion, by 		creating more code services.

## API

_Document your API here_

## Usage
After setting up the system, the user can use the publish data to PowerBI using the PublishToPowerBI service. Once the data is available at PowerBI, further analytics can be done.

To easily try our PowerBI integration, open the PowerBIPublisher portal where you can simulate device data being published 

### Code Services
SetupPowerBI - a setup service that creates users and ensures all constants are set.  This service should only be run once.

PublishToPowerBI - a service which publishes data to PowerBI, the data is the mqtt message payload, which it is subsrcibed to.

### Code Libraries
ConstantsPowerBI - a constants library, which holds constants specific to PowerBI ipm, in this case it's just the URL(s). 

### Code Triggers
OnDevicePublish - A trigger which calls the PublishToPowerBI code service when message is published to the DeviceData message topic. 

User can define more triggers based on the requirements. 

### Portals
PowerBIPublisher: It's a demo portal, which allows user to mock up devices and send data to PowerBI. It can be customized according to users needs. 

## Thank you

Powered by ClearBlade Enterprise IoT Platform: [https://platform.clearblade.com](https://platform.clearblade.com)
