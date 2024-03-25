import './RecipeCard.css';

import CTA from './CTA';

function RecipeCard({ item, go }) {

    return (
        <>
            <article className="recipe-card">
                <div className="recipe-card__image-container">
                    <img className="recipe-card__image" src={item.img} alt={item.alt} />
                </div>
                <div className="recipe-card__content">
                    <h1 className="recipe-card__title">{item.title}</h1>
                    <p className='recipe-card__subtitle'>{item.text}</p>
                    <div className="ingredient__container">
                        <h2 className="ingredient__title">Ingredients</h2>
                        <ul className='ingredient__list'>
                            {item.ingredients.map((ingredient) => (
                                <li key={ingredient} className="ingredient">{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="recipe__container">
                        <h2 className="recipe__title">Recipe</h2>
                        {item.recipe.split('. ').map((sentence) => (
                            <p key={sentence} className="recipe">{sentence.trim() + (sentence.endsWith('.') ? '' : '.')}</p>
                        ))}
                    </div>
                    <CTA go={go} target='recipes' type='hero'>Back To Gallery</CTA>
                </div>
            </article>
        </>
    )
}

export default RecipeCard;