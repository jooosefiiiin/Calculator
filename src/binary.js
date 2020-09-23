import React, { Component } from "react";


class Converter extends React.Component {
	state = { value: 100, conversionType: "d2b" };
	
	decimalToBinary() {
		return Number(this.state.value).toString(2);
	}
	
	binaryToDecimal() {
		return parseInt(this.state.value, 2);
	}
	
	render() {
		return (
			<Container>
				<InputBox
					state={this.state}
					radioHandler={conversionType => this.setState({ conversionType })}
					inputHandler={value => this.setState({ value })}
				/>
				<ResultsBox
					value={this.state.conversionType == "d2b" ? this.decimalToBinary() : this.binaryToDecimal()} 
				/>
			</Container>
		);
	}
}

const ResultsBox = props => {	
	return(
		<div className="text-center result">
			{props.value}
		</div>
	);
	
}

const Container = props => {
	return(
		<div className="container">
			<div className="row">
				<div className="col-xs-8 col-xs-push-2">
					<h1 className="text-center title">Decimal Converter</h1>
					{props.children}
				</div>
			</div>
		</div>
	);
}

const InputBox = props => {
	return (
		<form className="text-center">
			<div className="form-group">
				<label className="radio-inline">
					<input type="radio" 
						onClick={() => props.radioHandler("d2b")} 
						checked={props.state.conversionType == "d2b"}
						/>Base(10) to Binary
				</label>
				<label className="radio-inline">
					<input type="radio"
						onClick={() => props.radioHandler("b2d")} 
						checked={props.state.conversionType == "b2d"}
						/>Binary to Base(10)
				</label>
			</div>
			<div className="form-group">
				<input type="number"
					onChange={ev => props.inputHandler(ev.target.value)}
					className="form-control text-center inputForm" 
					placeholder="Value to Convert"
					value={props.state.value}
					/>
			</div>
		</form>
	);
}

ReactDOM.render(<Converter />, document.getElementById('converter'));