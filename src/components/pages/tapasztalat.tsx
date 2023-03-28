import { Component } from "react";
import petrik from "../files/petrik.jpg";

export default class Tapasztalat extends Component {
    render() {
        return <div className="Center">
            <div className="flexbox">
                
                    <div>
                        <h4>Pro-bono bulik</h4>
                        <ul>
                            <li>Csibeavató, 2021. 08. 31.</li>
                            <li>Karácsonyi bál, 2021. 12. 22.</li>
                            <li>Farsangi mulatság, 2022. 02. 20.</li>
                        </ul>
                        <h4>Professzionális bulik</h4>
                        <ul>
                            <li>Tanárkarácsony, 2021. 12. 20.</li>
                            <li>Ballagás, 2022. 04. 30.</li>
                        </ul>
                    </div>
                

                    <img className="" src={petrik}/>
            </div>
        </div>
    }
}