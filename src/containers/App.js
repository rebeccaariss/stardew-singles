import React, { Component } from 'react';
import SearchBox from '../components/SearchBox/SearchBox';
import CheckBox from '../components/CheckBox/CheckBox';
import Scroll from '../components/Scroll/Scroll';
import CardList from '../components/CardList/CardList';
import Footer from '../components/Footer/Footer';
import { datingpool } from '../datingpool';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      candidates: [],
      searchfield: '',
      women: true,
      men: true
    };
    this.onPreferenceSelection = this.onPreferenceSelection.bind(this);
  }

  componentDidMount() {
    this.setState({ candidates: datingpool })
    console.log(this.state)
  }

  onSearchChange = (event) => {
    // console.log(event.target.value);
    this.setState({ searchfield: event.target.value })
    // console.log(filteredRobots);
}

  onPreferenceSelection = (event) => {
    if (event.target.id === "Women" && event.target.CheckBox === false) {
      this.setState({women: false})
      console.log("women:", this.state.women, "men:", this.state.men)
    } else if (event.target.id === "Men" && event.target.CheckBox === false) {
      this.setState({men: false})
      console.log("women:", this.state.women, "men:", this.state.men)
    } else if (event.target.id === "Women" && event.target.CheckBox === true) {
      this.setState({women: true})
      console.log("women:", this.state.women, "men:", this.state.men)
    } else if (event.target.id === "Men" && event.target.CheckBox === true) {
      this.setState({men: true})
      console.log("women:", this.state.women, "men:", this.state.men)
    }
    console.log("women:", this.state.women, "men:", this.state.men)
  }

  // findCharacterImages = ({ name }) => {
  //   let characterFolder = images/name;
  //   let characterFiles = characterFolder.map((image, i) => {
  //     return <img src={image[i].png} alt='character' />
  //   });
  //   return characterFiles;
  // }

  // onClose = (event) => {

  // }

  render() {
    // const { candidates, searchfield } = this.state;
    const filteredCandidates = this.state.candidates.filter(candidate => {
        return candidate.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
        // return !candidates.length ?
        // <h1>Loading</h1> :
        return (
            <div className='tc'>
                <header>
                  <h1 className='f-subheadline ma4'>Stardew Valley Singles</h1>
                  <div id='description'>
                    <p>Tired of trying to remember which gifts will win you hearts in Stardew Valley? Having trouble choosing your future in-game spouse? Look no further.</p>
                    <p>Keep this app open while you play for a more streamlined dating experience! <img id='love' src='https://stardewcommunitywiki.com/mediawiki/images/0/04/HeartIconLarge.png' alt='love' /></p>
                    {/* <p className='i'>Click the links to open their corresponding Stardew Valley Wiki pages in a new tab.</p> */}
                  </div>
                  <div id='nav' className='flex justify-center items-center'>
                  <SearchBox searchChange={this.onSearchChange} />
                  <div className='flex items-center'>
                    <CheckBox gender='Women' preferenceSelection={this.onPreferenceSelection}  />
                    <CheckBox gender='Men' preferenceSelection={this.onPreferenceSelection} />
                  </div>
                </div>
                </header>
                <Scroll>
                    <CardList candidates={filteredCandidates} />
                </Scroll>
                <footer>
                  <p> 
                    Made with <img id='love' src='https://stardewcommunitywiki.com/mediawiki/images/0/04/HeartIconLarge.png' alt='love' /> and <img id='coffee' src='https://stardewcommunitywiki.com/mediawiki/images/e/e9/Coffee.png' alt='coffee' height='' width='' /> by <a className='link blue hover-dark-blue' target='_blank' rel='noreferrer' href='https://github.com/rebeccaariss'>Rebecca Ariss</a> | Stardew Valley font @ <a className='link blue hover-dark-blue' target='_blank' rel='noreferrer' href='http://www.onlinewebfonts.com/download/1b1432fe0f6a48c9122c20f307e6737d'>Online Web Fonts</a>
                  </p>
                </footer>
            </div>
        );
  }
}

export default App;
