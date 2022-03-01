import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import data from "../../assets/data/logements.json";
import Tag from "../../components/tag/Tag";
import Host from "../../components/host/Host";
import Rate from "../../components/rate/Rate";
import Dropdown from "../../components/dropdown/Dropdown";
import Caroussel from "../../components/caroussel/Caroussel";
import "./FicheLogement.css";
import ErroPage from "../erropage/ErroPage";

function FicheLogement() {
	const params = useParams();
	const idLogementRecherche = params.FicheLogementId;
	const logement = data.find((logement) => logement.id === idLogementRecherche);
	if (!logement) {
		return <ErroPage></ErroPage>;
	}
	const logementPictures = logement.pictures;
	const tagList = logement.tags;
	const hostName = logement.host.name;
	const description = logement.description;
	const hostPicture = logement.host.picture;
	const equipementList = logement.equipments;

	return (
		<Fragment>
			<div className="caroussel-area">
				<Caroussel arrayofpictures={logementPictures}></Caroussel>
			</div>
			<section className="fichelogement">
				<div className="title">
					<h1>{logement.title}</h1>
					<p className="location">{logement.location}</p>
				</div>
				<div className="host">
					<Host name={hostName} picture={hostPicture}></Host>
				</div>
				<div className="tags">
					{tagList.map((tagObject, index) => (
						<Tag key={index} tag={tagObject}></Tag>
					))}
				</div>
				<div className="rating">
					<Rate rating={logement.rating}></Rate>
				</div>
				<div className="description">
					<Dropdown
						display={""}
						datatype={"typeDescription"}
						data={description}
						header={"Description"}
					></Dropdown>
				</div>
				<div className="equipement">
					<Dropdown
						display={""}
						datatype={"typeList"}
						data={equipementList}
						header={"Equipement"}
					></Dropdown>
				</div>
			</section>
		</Fragment>
	);
}

export default FicheLogement;
