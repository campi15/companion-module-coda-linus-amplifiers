export function updateActions() {
	let actions = {}

	actions['powerOn'] = {
		name: 'Power On/Off',
		options: [
			{
				id: 'powerState',
				type: 'dropdown',
				label: 'Set Power State',
				choices: [
					{ id: true, label: 'Power On' },
					{ id: false, label: 'Power Off' },
				],
				default: true,
			},
			{
				id: 'powerOnDelay',
				type: 'textinput',
				label: 'Power On Delay (seconds)',
				default: '0',
			}
		],
		callback: async ({ options }) => {
			// Message Format: *SET_POWER=X,Y
			let cmd = '*SET_POWER=' + (options.powerState ? '1' : '0') + ',' + options.powerOnDelay
			await this.sendCommand(cmd)
		},
	}

	actions['muteAll'] = {
		name: 'Mute All',
		options: [
			{
				id: 'muteState',
				type: 'dropdown',
				label: 'Set Mute All',
				choices: [
					{ id: true, label: 'Enable' },
					{ id: false, label: 'Disable' },
				],
				default: true,
			},
		],
		callback: async ({ options }) => {
			// Message Format: *SET_MUTE=(channel),(enable = 1 / disable = 0)
			//will need to repeat for all channels, as there is not all command.
			for (let mutechannel = 1; mutechannel <= 4; mutechannel++) {
				let cmd = '*SET_MUTE=' + mutechannel + ',' + (options.muteState ? '1' : '0')
				await this.sendCommand(cmd)
			}
		},
	}

	actions['muteChannels'] = {
		name: 'Mute Single Channel',
		options: [
			{
				id: 'channel',
				type: 'dropdown',
				label: 'Channel',
				choices: [
					{ id: '1', label: '1' },
					{ id: '2', label: '2' },
					{ id: '3', label: '3' },
					{ id: '4', label: '4' },
				],
				default: '1',
			},
			{
				id: 'muteState',
				type: 'dropdown',
				label: 'Mute',
				choices: [
					{ id: true, label: 'Enable' },
					{ id: false, label: 'Disable' },
				],
				default: true,
			},
		],
		callback: async ({ options }) => {
			// Message Format: *SET_MUTE=channel,enable = 1 / disable = 0
			let cmd = '*SET_MUTE=' + options.channel + ',' + (options.muteState ? '1' : '0')
			await this.sendCommand(cmd)
		},
	}

	actions['getActiveSnapshot'] = {
		name: 'Get Active Snapshot',
		options: [],
		callback: async ({ options }) => {
			// Message Format: *GET_ACT_SNAPSHOT
			let cmd = '*GET_ACT_SNAPSHOT'
			await this.sendCommand(cmd)
		},
	}

	actions['loadSnapshot'] = {
		name: 'Load Snapshot',
				description: 'Snapshot # 1-20, or #21 for the configuration when LINUS Control was last connected',

		options: [
			{
				type: 'textinput',
				label: 'Snapshot Number',
				id: 'snapshotNumber',
				default: '1',
				useVariables: false,
			}
		],
		callback: async ({ options }) => {
			// Message Format: *LOADSNAPSHOT=X(snapshot # 1-21)
			let cmd = '*LOADSNAPSHOT=' + options.snapshotNumber
			await this.sendCommand(cmd)
		},
	}

	actions['getSnapshotFiles'] = {
		name: 'Get Snapshot Files',
		options: [
			{
				type: 'dropdown',
				label: 'Folder',
				id: 'folder',
				default: '',
				useVariables: false,
				choices: this.snapshotFolders,
			},
		],
		callback: async ({ options }) => {
			// Message Format: {"command":"get_snapshot_files", "folder":folder (String)}
			let cmd = '{"command":"get_snapshot_files", "folder":"' + options.folder + '"}'
			await this.sendCommand(cmd)
		},
	}
	
	actions['setSnapshot'] = {
		name: 'Set Snapshot',
		options: [
			{
				type: 'dropdown',
				label: 'Folder',
				id: 'folder',
				default: '',
				useVariables: false,
				choices: this.snapshotFolders,
			},
			{
				type: 'textinput',
				label: 'File',
				id: 'file',
				default: '',
				useVariables: false,
			},
		],
		callback: async ({ options }) => {
			// Message Format: {"command":"set_snapshot", "path":folder/file (String)}
			let path = options.folder + '/' + options.file
			let cmd = '{"command":"set_snapshot", "path":"' + path.padEnd(20) + '"}'
			await this.sendCommand(cmd)
		},
	}

	this.setActionDefinitions(actions)
}
