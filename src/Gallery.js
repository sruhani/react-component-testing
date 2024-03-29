function Profile() {
    return (
        <img
            src="https://i.imgur.com/QIrZWGIs.jpg"
            alt="Alan L. Hart"
        />
    );
}

/*Jedes Modul welches ich auf diesem Wege erstelle benötigt
* einen Default-Export  wie hier drunter angezeigt
*
* */

export default function Gallery() {
    return (
        <section>
            <h1>
                Übersicht der Gallerie-Bilder
            </h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    );
}