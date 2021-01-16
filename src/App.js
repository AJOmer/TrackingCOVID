import React, { Fragment } from 'react';
import { Cards, Chart, CountryPicker } from './components/index';
import { fetchData } from './api/index';
import styles from "./App.module.css";
import Footer from "./components/footer/Footer";
import ronaimage from "./images/ronaimage.png";

class App extends React.Component{
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  };

  handleCountrySelect = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country})
  }

  render(){
    const { data, country } = this.state;

    return (
      <Fragment>
      <div className={styles.container}>
        <img className={styles.image} src={ronaimage} alt="COVID-19"/>
        <br/>
        <text is="webview">
          <b>Global and Country Wide Cases of COVID-19</b>
        </text>
        <br/>
        <text is="webview">
          <i>(Select a Country from below to get a breakdown!)</i>
        </text>
        <br/>
        <br/>
        <Cards data={data} country={country}/>
        <CountryPicker handleCountrySelect={this.handleCountrySelect}/>
        <Chart data={data} country={country}/>
        <Footer/>
      </div>
      </Fragment>
    )
  }
}

export default App;

// npm version
// 6.14.10