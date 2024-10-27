import { StaticImageData } from 'next/image';
import um from '../fotos/1.jpg';
import dois from '../fotos/2.jpg';
import tres from '../fotos/3.jpg';
import quatro from '../fotos/4.jpg';
import cinco from '../fotos/5.jpg';
import seis from '../fotos/6.jpg';

type Item = {
    name: string;
    icon: StaticImageData;
}

export const Items: Item [] = [
    {name: 'um', icon: um},
    {name: 'dois', icon: dois},
    {name: 'tres', icon: tres},
    {name: 'quatro', icon: quatro},
    {name: 'cinco', icon: cinco},
    {name: 'seis', icon: seis},
]