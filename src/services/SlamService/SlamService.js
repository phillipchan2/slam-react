class SlamService {
	static slams = [
		{
			name: 'slam name',
			description:
				'Cras egestas nunc quis vehicula ullamcorper. Suspendisse ultricies mi tincidunt mauris maximus, ut posuere sem finibus. Ut sit amet felis at ex fermentum lacinia. Duis ultricies magna vitae nibh pretium iaculis. Praesent scelerisque sem at pretium finibus. Phasellus imperdiet nisi a volutpat porttitor.',
			slots: 8,
			slotsFilled: 3,
			active: true,
			id: 1,
			type: 'slam'
		},
		{
			name: 'slam name 2',
			description: 'description',
			slots: 8,
			slotsFilled: 3,
			active: true,
			id: 2,
			type: 'slam'
		},
		{
			name: 'slam name 3',
			description: 'description',
			slots: 8,
			slotsFilled: 3,
			active: true,
			id: 3,
			type: 'slam'
		},
		{
			name: 'slam name 4',
			description: 'description',
			slots: 8,
			slotsFilled: 3,
			active: true,
			id: 4,
			type: 'slam'
		},
		{
			name: 'slam name 5',
			description: 'description',
			slots: 8,
			slotsFilled: 3,
			active: true,
			id: 5,
			type: 'slam'
		},
		{
			name: 'slam name 6',
			description: 'description',
			slots: 8,
			slotsFilled: 3,
			active: true,
			id: 6,
			type: 'slam'
		}
	];

	static getSlams() {
		return this.slams;
	}

	static getSlam(id) {
		return this.slams.find(slam => {
			return slam.id == id;
		});
	}
}

export default SlamService;