const stdInfo = [
    {
        stdName:"Salih Yaseen",
        image:"https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg",
        study:"Computer Engineering",
        hobby:"Watching Formula 1"
    },
    {
        stdName:"Lezan Mohammed",
        image:"https://cdn.pixabay.com/photo/2021/01/04/10/41/icon-5887126_1280.png",
        study:"Computer Science",
        hobby:"Reading"
    },
    {
        stdName:"Dosty Abdulhamid",
        image:"https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg",
        study:"Software Engineering",
        hobby:"Music"
    },
    {
        stdName:"Viyan Najmadin",
        image:"https://cdn.pixabay.com/photo/2021/01/04/10/41/icon-5887126_1280.png",
        study:"Computer Engineering",
        hobby:"Cooking"
    },
    {
        stdName:"Ahmed Helal",
        image:"https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg",
        study:"Computer Science",
        hobby:"Travel"
    }
];
const Card = () => {
    return (
        <>
            {stdInfo.map((info)=>(
                <div className="card-container">
                    <img src={info.image} alt="Avatar" />
                    <div className="card-info">
                        <p>Name: {info.stdName}</p>
                        <p>Study: {info.study}</p>
                        <p>Hobby: {info.hobby}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Card
