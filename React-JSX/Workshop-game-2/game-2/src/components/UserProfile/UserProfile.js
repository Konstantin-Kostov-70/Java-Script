import { Link } from "react-router-dom"

export const Profile = () => {

    return (
        <section id="profile-details">
            <h1>Your Profile</h1>
            <div className="info-section">
                <div className="profile-info">
                    <div className="profile-header">
                        <img className="profile-img" src="https://www.sideshow.com/storage/product-images/904929/captain-america-2012-version_marvel_square.jpg" alt='img' />
                        <h1>Konstantin Kostov</h1>
                        <p className="username">Username: kokolino</p>
                        <p className="details">Rank: Super Gamer</p>
                        <p className="details">Email: koko@abv.bg</p>
                        <p className="details">Phone: +47-699-878-90</p>
                    </div>
                    <div className="favorite-games">
                        <h3>My favorite games</h3>
                        <ul className="nav-fav-games">
                            <li className="item-fav-game">
                                <div className="img-wrapper">
                                    <img className="img-fav-game" src="https://ssb.wiki.gallery/images/thumb/c/c8/Zelda_SSBU.png/1200px-Zelda_SSBU.png" alt="img" />
                                    <h4 className="title-fav-game">Zelda</h4>
                                </div>
                                <Link to={''} className="button-fav-game">Details</Link>
                            </li>
                            <li className="item-fav-game">
                                <div className="img-wrapper">
                                    <img className="img-fav-game" src="https://static.posters.cz/image/750/kalender/super-mario-i62795.jpg" alt="img" />
                                    <h4 className="title-fav-game">Super Mario</h4>
                                </div>
                                <Link to={''} className="button-fav-game">Details</Link>
                            </li>
                            <li className="item-fav-game">
                                <div className="img-wrapper">
                                    <img className="img-fav-game" src="https://ssb.wiki.gallery/images/thumb/c/c9/Donkey_Kong_SSBU.png/800px-Donkey_Kong_SSBU.png" alt="img" />
                                    <h4 className="title-fav-game">Donkey Kong</h4>
                                </div>
                                <Link to={''} className="button-fav-game">Details</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bio">
                    <h3>My story</h3>
                    <p>
                        Captain America is a superhero who appears in
                        comic books published by Marvel Comics.
                        His first appearance was in Captain America
                        Comics #1 in March 1941, published by Marvel's
                        predecessor, Timely Comics. It was created by Joe Simon and Jack
                    </p>
                </div>


                <div className="buttons">
                    <Link to="" className="button">Edit</Link>
                    <button className="button">Delete</button>
                </div>

            </div>
        </section>
    )
}