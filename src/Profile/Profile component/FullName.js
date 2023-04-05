import React from 'react';
import Figure from 'react-bootstrap/Figure';

function FullName(props) {

    return (

        <div className="NEW-00">

            <Figure>
                <Figure.Image
                    width={171}
                    height={180}
                    alt=""
                    src="https://scontent.xx.fbcdn.net/v/t1.15752-9/339088256_567185958843262_1597734654359871899_n.jpg?stp=dst-jpg_p206x206&_nc_cat=106&ccb=1-7&_nc_sid=aee45a&_nc_ohc=JAtT6JHSKVQAX8ctcBO&_nc_oc=AQmZ57LIUmqTbURYvJXtWAVl_qcOZUKzADABk-r1UlnUNjdx_OHck2k4pDIVUcSKJ4G9eIMNFksFkcCu9quRqc7-&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSk94_2CYYIwyFDOqOpSYCLBirGB_EkFr3ep38DqKkhKw&oe=6454B9BD"
                />
                <Figure.Caption>
                    <h4>Devellopeur-FullStack-js </h4>
                    <p>Salut tous le monde, je m'appelle {props.name} Atoui j'ai {props.age} ans je suis une fille très charmante, avec des joues rondes et des yeux vertes. je suis très gentille avec tout le monde. Je suis toujours avec mes amis pour ses supporter et pour ses montrer la meilleure solution quand ils ont des problèmes. Ce que j'aime à mes amies c'est l'honnêteté.</p>

                </Figure.Caption>
            </Figure>


        </div>

    )
}

export default FullName