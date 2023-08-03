function MenuItem({image,name,content,price}) {
    return (
        <div className="menuItem">
        <div className="imageContainer" style={{backgroundImage:`url(${image})`}}></div> 
        <h1 style={{ marginBottom: '10px' }}>{name}</h1>
        <h6 style={{ fontSize:'15px',marginTop: '0px' }}>{content}</h6>
        <p style={{ color: 'red' }}>{price} TL</p>
        </div>
        );
}

export default MenuItem;