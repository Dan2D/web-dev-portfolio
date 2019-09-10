import React from 'react';
import queryString from 'query-string';
import {projTxt} from "./ProjTxt";
import {mapIcons} from "../Utils/Helpers";

import ProjImg from "./ProjImg";
import "./ProjPg.css";

function ProjPg(props) {
    const PROJECT = queryString.parse(props.location.search).name;
    const notesList = projTxt[PROJECT].notes.map(note => <li>{note}</li>);

    return (
        <div className="proj-pg-container">
            <section className="proj-pg--main">
                <div className="main--top">
                    <h1>PROJECT OVERVIEW</h1>
                    <p>{projTxt[PROJECT].purpose}</p>
                </div>
                <div>
                    <img className="proj-view--main" src={require(`../../images/views/${PROJECT}-desktop-lg.jpg`)} alt={`${PROJECT} site view`} />
                    <div className="info-header__lnks">
                        <a className="info-lnks info-lnks--live" href={projTxt[PROJECT].links.liveSite}>Live Site</a>
                        <a className="info-lnks info-lnks--github" href={projTxt[PROJECT].links.github}>GitHub</a>
                        <a className="info-lnks info-lnks--figma" href={projTxt[PROJECT].links.figma}>Mock-up</a>
                    </div>
                </div>
            </section>
            <section className="proj-pg--notes">
                <div className="notes--top">
                    <ProjImg desktop={PROJECT} mobile={PROJECT}/>
                    <div className="notes__info">
                        <h1>PROJECT NOTES</h1>
                        <ul>
                            {notesList}
                        </ul>
                    </div>
                </div>
                    <div className="proj-info proj-info--tools">
                        <h3 className="tools__title">Tools</h3>
                        <div className="icon-group">
                            {mapIcons(projTxt[PROJECT].tools)}
                        </div>
                        <h3 className="tools__title">Design</h3>
                        <div className="icon-group">
                            {mapIcons(projTxt[PROJECT].design)}
                        </div>
                    </div>
            </section>
        </div>
    )
}

export default ProjPg
