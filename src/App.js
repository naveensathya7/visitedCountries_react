import {Component} from 'react'
import './App.css'

const initialCountriesList = [
  {
    id: '53c9c67a-c923-4927-8a75-fdfc4bc5ec61',
    name: 'Australia',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-australia-img.png',
    isVisited: false,
  },
  {
    id: '8baa8029-fb2c-4f06-bfcc-3dc9ad12b24d',
    name: 'Canada',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-canada-img.png',
    isVisited: false,
  },
  {
    id: '1b520f98-6548-41f3-816e-c8b887865172',
    name: 'Greenland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-greenland-img.png',
    isVisited: false,
  },
  {
    id: '25841996-fbfd-4554-add4-4c94082c8ccd',
    name: 'India',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-india-img.png',
    isVisited: true,
  },
  {
    id: '603c3568-13b0-11ec-82a8-0242ac130003',
    name: 'Netherlands',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-netherland-img.png',
    isVisited: false,
  },
  {
    id: '3c988dec-55e1-477d-a9e2-b354fd559849',
    name: 'Portugal',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-portugal-img.png',
    isVisited: false,
  },
  {
    id: 'd766f754-34f7-413e-81ec-9992821b97fa',
    name: 'Switzerland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-switzerland-img.png',
    isVisited: false,
  },
  {
    id: '7ebb4e04-b124-417f-a69e-564a456d70f1',
    name: 'Thailand',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-thailand-img.png',
    isVisited: false,
  },
  {
    id: '1e4b1dcd-6ace-4dde-ad8d-675927d5ae47',
    name: 'United Kingdom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-united-kingdom-img.png',
    isVisited: true,
  },
  {
    id: 'e76da8ca-bc48-4981-902b-a4d2d46feb6d',
    name: 'Venezuela',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-venezuela-img.png',
    isVisited: false,
  },
]

// Replace your code here
class App extends Component {
  state = {
    countriesList: initialCountriesList,
    visitedCountries: initialCountriesList.filter(
      eachVal => eachVal.isVisited === true,
    ),
  }

  addVisitedCountries = () => {
    const {countriesList} = this.state
    this.setState({
      visitedCountries: countriesList.filter(each => each.isVisited === true),
    })
  }

  removeVisitedCountry = country => {
    const {visitedCountries} = this.state
    const updatedCountriesList = visitedCountries.filter(
      each => each.id !== country.id,
    )
    this.setState(prevState => ({
      visitedCountries: updatedCountriesList,
      countriesList: prevState.countriesList.map(each => {
        if (each.id === country.id) {
          return {...each, isVisited: false}
        }
        return {...each}
      }),
    }))
  }

  toggleVisit = country => {
    const {countriesList} = this.state

    this.setState(
      prevState => ({
        countriesList: prevState.countriesList.map(each => {
          if (each.id === country.id) {
            return {...each, isVisited: true}
          }
          return {...each}
        }),
      }),
      this.addVisitedCountries,
    )
  }

  render() {
    const {countriesList, visitedCountries} = this.state
    console.log(countriesList, visitedCountries)
    const noCountriesVisited = visitedCountries.length === 0
    return (
      <div className="countries-bg">
        <h1 className="heading">Countries</h1>
        <ul className="countries-list">
          {countriesList.map(each => (
            <li key={each.id} className="list-item">
              <p>{each.name}</p>
              {each.isVisited ? (
                <p className="visited-text">Visited</p>
              ) : (
                <button
                  className="visit-btn"
                  type="button"
                  onClick={() => this.toggleVisit(each)}
                >
                  Visit
                </button>
              )}
            </li>
          ))}
        </ul>
        <h1>Visited Countries</h1>
        {noCountriesVisited ? (
          <div>
            <p>No Countries Visited Yet</p>
          </div>
        ) : (
          <ul className="visited-countries-list">
            {visitedCountries.map(eachCount => (
              <li className="visited-country-item" key={eachCount.id}>
                <img
                  className="country-image"
                  src={eachCount.imageUrl}
                  alt="thumbnail"
                />
                <div className="country-details">
                  <p>{eachCount.name}</p>
                  <button
                    type="button"
                    onClick={() => this.removeVisitedCountry(eachCount)}
                    className="remove-btn"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default App
