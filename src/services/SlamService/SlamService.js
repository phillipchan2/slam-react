import SubmissionService from '../SubmissionService/SubmissionService';
import SlotService from '../SlotService/SlotService';

class SlamService {
	static slams = [
		{
			name: 'Super Slam',
			description:
				'Cras egestas nunc quis vehicula ullamcorper. Suspendisse ultricies mi tincidunt mauris maximus, ut posuere sem finibus. Ut sit amet felis at ex fermentum lacinia. Duis ultricies magna vitae nibh pretium iaculis. Praesent scelerisque sem at pretium finibus. Phasellus imperdiet nisi a volutpat porttitor.',
			active: true,
			id: 1,
			imageUrl: 'https://source.unsplash.com/random'
		},
		{
			name: 'slam name 2',
			description: 'description',
			active: true,
			id: 2,
			imageUrl: 'https://source.unsplash.com/random'
		},
		{
			name: 'slam name 3',
			description: 'description',
			active: true,
			id: 3,
			imageUrl: 'https://source.unsplash.com/random'
		},
		{
			name: 'slam name 4',
			description: 'description',
			active: true,
			id: 4,
			imageUrl: 'https://source.unsplash.com/random'
		},
		{
			name: 'slam name 5',
			description: 'description',
			active: true,
			id: 5,
			imageUrl: 'https://source.unsplash.com/random'
		},
		{
			name: 'slam name 6',
			description: 'description',
			active: true,
			id: 6,
			imageUrl: 'https://source.unsplash.com/random'
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

	static getSlamBySlotId(slotId) {
		var slot = SlotService.getSlot(slotId);

		return this.slams.find(slam => {
			return slam.id == slot.slamId;
		});
	}

	static getSlamsByUserId(userId) {
		var submissions = SubmissionService.getSubmissionsByUserId(userId);
		var slotIds = new Set();
		var slams = new Set();

		submissions.forEach(submission => {
			slotIds.add(submission.slotId);
		});

		slotIds.forEach(slotId => {
			slams.add(this.getSlamBySlotId(slotId));
		});

		return Array.from(slams);
	}
}

export default SlamService;
