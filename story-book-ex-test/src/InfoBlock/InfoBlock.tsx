// src/InfoBlock/InfoBlock.tsx

import { FC } from 'react';
import cn from 'classnames';

import './InfoBlock.css';

export interface InfoBlockProps {
    title: string;
    caption: string;
    color: 'white' | 'red';
}

export const InfoBlock: FC<InfoBlockProps> = props => {
    const { title, caption, color } = props;

    return (
        <div className={cn('info-block', `info-block_color_${color}`)}>
            <p className="info-block__title">{title}</p>
            <p className="info-block__caption">{caption}</p>
        </div>
    );
};