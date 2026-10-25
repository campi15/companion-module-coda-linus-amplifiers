# CODA LINUS AMPLIFIERS
This module will control the Coda Audio LINUS amplifiers (except for the LINUS6.4.)

[https://codaaudio.com/range/linus-dsp-amplifiers/](https://codaaudio.com/range/linus-dsp-amplifiers/)

This module uses the 3rd party control protocol outlined here: 

https://www.codaaudio.com/docs/manuals/linus-control/third_party_control.html

## Actions
* Power On/Off
* Mute all on/off
* Mute channels 1-4 on/off
* Set delay time (seconds)
* Set gain
* Set fallback input
* Force Fallback
* Fallback recover
* Load snapshot
* Clear group

## Feedback
* Power state
* Channel mute
* Mute all channels
* Channel gain
* Channel delay
* Channel fallback input


## Presets
* Power On - Off (Stepped Action)
* Mute all
* Force Fallback
* Fallback Recover

## Variables
* Device information
* Active Snapshot

### Version 1.0.0
This first release of the module.

<!-- 
GETDEVINFO
LOADSNAPSHOT
GET_ACT_SNAPSHOT
SET_MUTE
GET_MUTE
SET_GAIN
GET_GAIN
SET_DELAY
GET_DELAY
SET_FALLBACK
GET_FALLBACK
SET_FALLBACKFORCE
SET_FALLBACKRECOVER
SET_POWER
CLEARGROUP
 -->

