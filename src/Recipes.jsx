import galleryData from './galleryData';
import Button from './Button';

import './Recipes.css';

function Recipes({ go, filterTag, setFilterTag }) {
    const handleFilterChange = (tag) => {
        setFilterTag(tag);
    };

    return (
        <>
            <div className="gallery__title"><h1>Recipe Gallery</h1></div>

            <div className="filter__container">
                <h2 className="filter__title">Filter: </h2>
                <div className="filter-item-container">
                    <Button visual='filter' type="button" status={filterTag === 'all' && `selected`} onClick={() => handleFilterChange('all')}>All</Button>
                    <Button visual='filter' type="button" status={filterTag === 'snack' && `selected`} onClick={() => handleFilterChange('snack')}>Snack</Button>
                    <Button visual='filter' type="button" status={filterTag === 'breakfast' && `selected`} onClick={() => handleFilterChange('breakfast')}>Breakfast</Button>
                    <Button visual='filter' type="button" status={filterTag === 'lunch' && `selected`} onClick={() => handleFilterChange('lunch')}>Lunch</Button>
                    <Button visual='filter' type="button" status={filterTag === 'dinner' && `selected`} onClick={() => handleFilterChange('dinner')}>Dinner</Button>
                    <Button visual='filter' type="button" status={filterTag === 'drink' && `selected`} onClick={() => handleFilterChange('drink')}>Drink</Button>
                </div>
            </div>

            <div className="gallery">
                {galleryData.filter(item => filterTag === 'all' || item.tag.includes(filterTag)).map((item) => (
                    <a key={item.title} href={`./${item.title}`} className="gallery__item gallery-item" onClick={e => go(e, `${item.title}`)}>
                        <div className="gallery-item__image"><img src={item.img} alt={item.alt} /></div>
                        <div className="gallery-item__title"><h2>{item.title}</h2></div>
                    </a>
                ))}
            </div>
        </ >
    );
}

export default Recipes; 