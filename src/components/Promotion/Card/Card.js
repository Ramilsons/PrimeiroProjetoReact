import React from 'react';
import './Card.css';

const PromotionCard = ({ promotion }) => {
    return (
        <div className="promotion-card">
            <img src={promotion.imageUrl} className="promotion-card__image" alt={promotion.title} />
            <div className="promotion-card__info">
                <h1 className="promotion-card__title">{promotion.title}</h1>
                <span className="promotion-card__price">R$ {promotion.price}</span>
            </div>
            <footer className="promotion-card__footer"> 
                {
                    //condicional
                    //se o número de comentário for maior que 0, apresente o primeiro comentário 
                    promotion.comments.length > 0 && (
                        <div className="promotion-card__comments">"{promotion.comments[0].comment}"</div>
                    )
                }

                <div className="promotion-card__comments-count">{promotion.comments.length} {''}
                Comentário{promotion.comments.length > 1 ? 's' : ''} </div>
                <a href={promotion.url} target="_blank" rel="noreferrer" className="promotion-card__link">IR PARA O SITE</a>
            </footer>
        </div>
    )
}

export default PromotionCard;