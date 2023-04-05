import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Profession() {
  const students =
  {
    name: "Jones Tomas",
    email: "jones.tomas@gmail.com",
    address: "Francfort-sur le main"

  }
  const person = {
    name: "Nicola sir",
    email: "nicola.sir@gmail.com",
    address: "bordeau-paris"
  }
  const gens = [
    { nom: "Abir", age: 25, email: "abir.nesfi@gmail.com", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5deueOtFBbxU-JkTtszR2ia2jWIlYAblX0Q&usqp=CAU" },
    { nom: "Rached", age: 29, email: "rached.benhassen@gmail.com", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqf86zpFYftu3ICcb65SPJMaw9nbTJPBwqTA&usqp=CAU" },
    { nom: "Arem", age: 26, email: "arem.atoui@isimg.tn", img: "https://scontent.xx.fbcdn.net/v/t1.15752-9/339088256_567185958843262_1597734654359871899_n.jpg?stp=dst-jpg_p206x206&_nc_cat=106&ccb=1-7&_nc_sid=aee45a&_nc_ohc=JAtT6JHSKVQAX8ctcBO&_nc_oc=AQmZ57LIUmqTbURYvJXtWAVl_qcOZUKzADABk-r1UlnUNjdx_OHck2k4pDIVUcSKJ4G9eIMNFksFkcCu9quRqc7-&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSk94_2CYYIwyFDOqOpSYCLBirGB_EkFr3ep38DqKkhKw&oe=6454B9BD" },
    { nom: "Oussama", age: 25, email: "oussama.nacer@gmail.com", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsLtw-GlkkeDchuNQ2Wgh2d6vDHT7ME4vm5Q&usqp=CAU" },
    { nom: "Nesrine", age: 24, email: "nesrine.fares@gmail.com", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTApkm57m1OYfabk-MATVTfnSWJSIOZ0Zbfgw&usqp=CAU" },

  ]
  return (
    <div>
      <div className="Best">
        <p>Lorsqu'on pratique une activité sportive, le corps sécrète des hormones telles que l'endorphine, la dopamine ou l'adrénaline qui permettent de réduire le stress, améliorer la qualité du sommeil, diminuer les douleurs et agir comme un antidépresseur, c'est donc avant tout une source de plaisir.</p>
      </div>
      <div className="Global" style={{ display: "flex" }}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDtZpOo9NQgPyQDZFYRivfvHAMKOMcAJx_tIz_Vw2utJ_NCK7QDIFcdMJdb5w3VWQXfms&usqp=CAU" />
          <Card.Body style={{ backgroundColor: "aqua" }}>
            <Card.Title><u>{students.name}</u></Card.Title>
            <Card.Text>{students.email}</Card.Text>
            <Card.Text>{students.address}</Card.Text>
            <Card.Text>
              <p>Le bodybuilding est l’un des sports de musculation les plus connu. Tout le monde a déjà vu ces podiums remplis de bodybuildeurs à la télévision. Les pratiquants ne sont pas ou peu nombreux.
                Ce sport est exigeant, aussi bien à la salle de musculation que dans la vie personnelle.</p>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKpEuFFSBgZjGu_xQhv_Y6P87cXD8mses0QA&usqp=CAU" />
          <Card.Body style={{ backgroundColor: "aqua" }}>
            <Card.Title><u>{person.name}</u></Card.Title>
            <Card.Text>{person.email}</Card.Text>
            <Card.Text>{person.address}</Card.Text>
            <Card.Text>
              <p>
                Les conseils et les actualités du monde du fitness. Ainsi que les divers accessoires pour optimiser au mieux vos séances. Les renseignements sur les régimes et les compléments alimentaires adaptés selon les types d'exercices et les objectifs à atteindre vous seront d'une aide précieuse que vous pratiquez en solo, en groupe, dans une salle de gym, avec un coach, etc.</p>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      {gens.map((el) => (
        <div className="gens">
          <img style={{
            minWidth: "150px", minHeight: "150px", maxWidth: "150px",
            maxHeight: "150px"
          }} src={el.img} alt="description of image" />
          <h5 className="title">{el.nom}</h5>
          <h6 className="Email">{el.age}</h6>
          <h6 className="Email">{el.email}</h6>

        </div>
      ))}
    </div>
  );
}

export default Profession;