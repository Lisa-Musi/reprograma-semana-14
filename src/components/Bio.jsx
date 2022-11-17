import { Subtitle } from './Subtitle';
import { Text } from './Text';
import { Image } from './Image';
import { useEffect, useState } from 'react';
import { GiHollowCat } from "react-icons/gi";


const Bio = () => {
    const [image, setImage] = useState();

    useEffect(() => {
        fetch('https://api.github.com/users/Lisa-Musi')
            .then(response => response.json())
            .then(response => setImage(response.avatar_url))
    }, []);

    return (
        <div className='card'>
            <Subtitle text={<>Sou Lisa Mascarenhas! <GiHollowCat /></>} />
            <Text text='Aluna reprograma, pessoa transfeminina musicista que estuda programação!' />
            {image ? <Image
                src={image}
                alt='Foto de Lisa Mascarenhas'
            /> : ''}
        </div>
    );
};

export { Bio };