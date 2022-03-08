import React from "react";
import SingeValueIndicatorArea from "../../components/singleevalueindicatorarea/SingeValueIndicatorArea";
import "./VerticalArea.css";
import calorieLogo from"../../assets/images/calorie.svg"
import proteinLogo from"../../assets/images/protein.svg"
import carbohydrateLogo from"../../assets/images/carbohydrate.svg"
import lipidLogo from"../../assets/images/lipid.svg"


function VerticalArea(props) {
	return (
		<div className="verticalarea">
			<SingeValueIndicatorArea number={props.keydata.calorieCount} unit="Kcal" category="Calories" svg={calorieLogo} cssClass="calorie" />
			<SingeValueIndicatorArea number={props.keydata.proteinCount} unit="g" category="Proteines" svg={proteinLogo} cssClass="protein"/>
			<SingeValueIndicatorArea number={props.keydata.carbohydrateCount} unit="g" category="Glucides" svg={carbohydrateLogo} cssClass="carbohydrate"/>
			<SingeValueIndicatorArea number={props.keydata.lipidCount} unit="g" category="Lipides" svg={lipidLogo} cssClass="lipid"/>
		</div>
	);
}

export default VerticalArea;
