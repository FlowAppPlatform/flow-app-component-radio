import React from 'react';

import AppComponent from 'flow-app-component';

import './css/theme/default.css';

class RadioComponent extends AppComponent {
  constructor() {
    super();
    const newState = {
      interactiveMode: false,
      readOnly: false,
      radioInputValue: false,
      properties: [
        {
          categoryName: 'General',
          categoryDescription: 'Basic settings for the radio',
          properties: [],
        },
        {
          categoryName: 'Events',
          categoryDescription: 'Events for the radio button',
          properties: [
            {
              id: 'event',
              name: 'Events',
              type: 'graph',
              options: {},
              data: null,
            },
          ],
        },
      ],
      iconUrl: '/assets/images/radio-component.png',
      name: 'Radio',
      type: 'ui-component',
      componentType: 'radio',
      category: 'Inputs',
      parent: null,
      showOnComponentsPanel: true,
      isValuable: true,
      allowsChildren: false,
    };

    this.state = Object.assign(this.state, newState); // merge two states together, and dont lose any parent state properties.
  }

    componentDidMount(){
        const interactiveMode = !(this.props.propertyData.interactiveMode === undefined);
        this.setState({interactiveMode, readOnly: interactiveMode});
    }

    handleClick = (e) => {
        if(this.state.readOnly){
            e.preventDefault();
        }else {
            this.setState(prevState => ({radioInputValue: !prevState.radioInputValue}))
        }
    }
    handleDbClick = (e) => {
        if(this.state.interactiveMode){
            this.setState(prevState => ({readOnly: !prevState.readOnly}))
        }
    }

  renderContent() {
    return (
      <div className="radio-container">
        <label htmlFor="radio" className="radio-label">
          <input
            type="radio"
            name="checkbox"
            id="radio"
            className="radio-input"
            value={this.state.radioInputValue}
            checked={this.state.radioInputValue}
            onDoubleClick={this.handleDbClick}
            onClick={this.handleClick}
            onChange={()=>{}}
          />
          Radio
        </label>
      </div>
    );
  }
}

export default RadioComponent;
