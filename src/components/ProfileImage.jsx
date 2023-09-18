function PorfileImage({ image, alt }) {

    return (<img
        src={image}
        className="profile"
        alt={alt} />
    );
}

export default PorfileImage;
