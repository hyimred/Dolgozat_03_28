import { Component } from "react";
import dj from "../files/dj.jpg";

export default class Main extends Component {
    render() {
        return <div className="Center">
            <h1>Üdvözöllek DJ Petrik weboldalán!</h1>
            <h3>Válassz a fenti lehetőségek közül!</h3>
            <img className="" src={dj}/>
        </div>
    }
}