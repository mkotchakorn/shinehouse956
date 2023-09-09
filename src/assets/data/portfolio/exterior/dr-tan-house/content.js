import image_1 from './1.jpg';
import image_2 from './2.jpg';
import image_3 from './3.jpg';
import image_4 from './4.jpg';
import image_5 from './5.jpg';
import banner from './banner-1.jpg';

export const data = {
  path: 'dr-tan-house',
  type: 'exterior',
  images: [image_1, image_2, image_3, image_4, image_5],
  desc: {
    project: `DR.TAN'S HOUSE`,
    owner: '',
    location: 'Rangsit, Pathum-Thani.',
    architect: 'Shine House',
    budget: '6.XX mb.',
    siteArea: '317 sq.m.',
    facilities: ['4 Bedroom.', '4 Powders room.', '1 Living Room.', '1 Dining Room.', '1 Kitchen Room.'],
  },
  banner: banner,
  preview: image_1,
};
