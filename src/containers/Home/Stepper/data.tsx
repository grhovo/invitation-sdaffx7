import church from '@assets/images/church.png';
import wine from '@assets/images/wine.png';

import Icon from './Icon';

export const steps = [
  {
    icon: () => <Icon src={church} />,
    time: '14:00',
    path: 'https://yandex.com/maps/org/102654452262/?ll=44.513045%2C40.182746&z=15.15',
    place: 'Սուրբ Գրիգոր Լուսավորիչ եկեղեցի',
    address: 'Երվանդ Քոչարի փողոց, Երևան',
  },
  {
    icon: () => <Icon src={wine} />,
    time: '17:30',
    path: 'https://yandex.com/maps/org/75872747374/?ll=44.391408%2C40.164666&z=17',
    place: 'Լիանա Գարդեն հոլլ',
    address: '34 Երիտասարդական փողոց, Փարաքար',
  },
];
